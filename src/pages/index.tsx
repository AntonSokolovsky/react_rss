import styles from '@/styles/MainPage.module.css';

import SearchBar from '../components/SearchBar/SearchBar';
import Cards from '../components/Cards/Cards';
import { IResponse } from '../types/Response';
import { Pagination } from '../components/Pagination/Pagination';
import { useRouter } from 'next/router';
import CharacterDetalils from '@/components/CharacterDetails/CharacterDetails';
import CountCards from '@/components/CountCards/CountCards';

export async function getServerSideProps(context: {
  query: { name: string; page: string };
}) {
  let page = 1;
  let searchValue = '';
  if (context.query.name) {
    searchValue = context.query.name;
  }
  if (context.query.page) {
    page = parseInt(context.query.page);
  }

  const res = await fetch(
    `https://rickandmortyapi.com/api/character?name=${searchValue}&page=${page}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
export default function MainPage({ data }: { data: IResponse }) {
  const router = useRouter();
  const searchValue =
    typeof router.query.name === 'string' ? router.query.name : '';
  const page = typeof router.query.page === 'string' ? router.query.page : 1;
  const isOpen =
    typeof router.query.details === 'string' ? router.query.details : '';
  const limit =
    typeof router.query.limit === 'string' ? router.query.limit : '20';
  const characters = data.results;
  const pagination = data.info;

  const closeDetails = () => {
    router.push(
      {
        pathname: router.pathname,
        query: { details: '', page: page, name: searchValue, limit: limit },
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <div className={styles.myApp}>
      <div className={styles.mainPage}>
        <h1>Rick & Morty characters</h1>
        <SearchBar />
        {data && <Cards characters={characters || []} />}
        <CountCards />
        {!!characters?.length && (
          <Pagination
            page={Number(page)}
            next={pagination.next}
            prev={pagination.prev}
          />
        )}
      </div>
      {isOpen && (
        <>
          <CharacterDetalils characters={characters || []} />
          <div className={styles.overlay} onClick={closeDetails} />
        </>
      )}
    </div>
  );
}
