import SearchBar from '../components/SearchBar/SearchBar';
import Cards from '../components/Cards/Cards';
import { useEffect, useState } from 'react';
import styles from './Mainpage.module.css';
import { IResponse } from '../types/Response';
import { Pagination } from '../components/Pagination/Pagination';
import { getPageNumber } from '../Utils/getPageNumber';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { useCharacterDetailsContext } from '../store';
import { setCharacters, setSearchValue } from '../ReduxStore';
import { useAppDispatch, useAppSelector } from '../ReduxStore/hooks';
import { useSearhCharactersQuery } from '../components/Api/CharactersApi';
import { getEndpoint } from '../Utils/getEndpoint';

export default function Mainpage() {
  const { isOpen, setIsOpen: setIsOpenDetails } = useCharacterDetailsContext();
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const characters = useAppSelector((state) => state.characters.list);
  const dispatch = useAppDispatch();
  const { data } = useSearhCharactersQuery(searchValue);

  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [pagination, setPagination] = useState<IResponse['info']>({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  });

  const [page, setPage] = useState<number>(1);

  const closeDetails = () => {
    setIsOpenDetails(false);
    navigate('/home');
  };
  //ToDo: delete after checking by mentor
  // const getData = (value: string) => {
  //   fetch(`${value}`)
  //     .then<IResponse>((data) => data.json())
  //     .then((data) => {
  //       dispatch(setCharacters(data.results));
  //       setPagination(data.info);
  //       data.info && setPage(getPageNumber(data.info));
  //       setSearchParams({ page: page.toString() });
  //     });
  // };
  // ToDo: try to implement RTKquery
  const getData = (value: string) => {
    if (!data) {
      return;
    }
    dispatch(setCharacters(data.results));
    setPagination(data.info);
    data.info && setPage(getPageNumber(data.info));
    setSearchParams({ page: page.toString() });
    dispatch(setSearchValue(getEndpoint(value)));
  };

  useEffect(() => {
    if (data) {
      dispatch(setCharacters(data.results));
      setPagination(data.info);
    }
  }, [dispatch, data]);

  useEffect(() => {
    setSearchParams({ page: page.toString() });
  }, [setSearchParams, page]);

  return (
    <div className={styles.myApp}>
      <div className={styles.mainPage}>
        <h1>Rick & Morty characters</h1>
        <SearchBar />
        <Cards />
        {!!characters?.length && (
          <Pagination
            page={page}
            next={pagination.next}
            prev={pagination.prev}
            onAction={getData}
          />
        )}
      </div>
      <Outlet />
      {isOpen && <div className={styles.overlay} onClick={closeDetails} />}
    </div>
  );
}
