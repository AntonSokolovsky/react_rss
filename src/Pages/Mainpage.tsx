import SearchBar from '../components/SearchBar/SearchBar';
import Cards from '../components/Cards/Cards';
import { useEffect, useState } from 'react';
import styles from './Mainpage.module.css';
import { IResponse } from '../types/Response';
import { ICharacter } from '../types/Character';
import { Pagination } from '../components/Pagination/Pagination';
import { getPageNumber } from '../Utils/getPageNumber';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

export default function Mainpage() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [, setSearchParams] = useSearchParams();
  // const pageNumberQuery = searchParams.get('page') || 1;
  // const searchQuery = searchParams.get('search');
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [pagination, setPagination] = useState<IResponse['info']>({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  });
  const [searchValue, setSearchValue] = useState<string>(
    () => localStorage.getItem('searchValue') || ''
  );

  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openDetails = () => setIsOpen(true);
  const closeDetails = () => {
    setIsOpen(false);
    navigate('/home');
  };

  const getData = (value: string) => {
    fetch(`${value}&name=${searchValue}`)
      .then<IResponse>((data) => data.json())
      .then((data) => {
        setCharacters(data.results);
        setPagination(data.info);
        data.info && setPage(getPageNumber(data.info));
        setSearchParams({ page: page.toString() });
      });
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${searchValue}`)
      .then<IResponse>((data) => data.json())
      .then((data) => {
        setCharacters(data.results);
        setPagination(data.info);
        // setSearchParams({ page: page.toString() });
      });
  }, [searchValue, page, setSearchParams]);

  return (
    <div className={styles.myApp}>
      <div className={styles.mainPage}>
        <h1>Rick & Morty characters</h1>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Cards characters={characters} openDetails={openDetails} />
        {!!characters?.length && (
          <Pagination
            page={page}
            next={pagination.next}
            prev={pagination.prev}
            onAction={getData}
          />
        )}
      </div>
      {isOpen && (
        <div className={styles.outlet}>
          {<Outlet />}
          <div className={styles.overlay} onClick={closeDetails}></div>
        </div>
      )}
    </div>
  );
}
