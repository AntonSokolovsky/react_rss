import SearchBar from '../components/SearchBar/SearchBar';
import Cards from '../components/Cards/Cards';
import { useEffect, useState } from 'react';
import styles from './Mainpage.module.css';
import { IResponse } from '../types/Response';
import { Pagination } from '../components/Pagination/Pagination';
import { getPageNumber } from '../Utils/getPageNumber';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { useCharacterDetailsContext } from '../store';
import { searchStateValue, setCharacters } from '../ReduxStore';
import { useAppDispatch, useAppSelector } from '../ReduxStore/hooks';
import {
  useLazyPaginationCharactersQuery,
  useSearhCharactersQuery,
} from '../components/Api/CharactersApi';
import { getEndpoint } from '../Utils/getEndpoint';
import CountCards from '../components/CountCards/CountCards';
import { setIsLoadingCards } from '../ReduxStore/IsLoadingCardsSlice/IsLoadingCardsSlice';

export default function Mainpage() {
  const { isOpen, setIsOpen: setIsOpenDetails } = useCharacterDetailsContext();
  const searchValue = useAppSelector(searchStateValue);
  const characters = useAppSelector((state) => state.characters.list);
  const countCards = useAppSelector((state) => state.countCards);
  const dispatch = useAppDispatch();
  const { data, isLoading } = useSearhCharactersQuery(searchValue);
  const [getCharacters] = useLazyPaginationCharactersQuery();

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
  const getData = (value: string) => {
    if (!data) {
      return;
    }
    getCharacters(getEndpoint(value))
      .unwrap()
      .then((data) => {
        dispatch(setCharacters(data.results));
        setPagination(data.info);
        data.info && setPage(getPageNumber(data.info));
      });
  };

  useEffect(() => {
    if (data) {
      dispatch(setCharacters(data.results));
      setPagination(data.info);
    }
  }, [dispatch, data, countCards]);

  useEffect(() => {
    setSearchParams({ page: page.toString() });
  }, [setSearchParams, page]);

  useEffect(() => {
    dispatch(setIsLoadingCards(isLoading));
  }, [dispatch, isLoading]);

  return (
    <div className={styles.myApp}>
      <div className={styles.mainPage}>
        <h1>Rick & Morty characters</h1>
        <SearchBar />
        <Cards />
        <CountCards />
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
