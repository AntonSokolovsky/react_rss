import type { ChangeEvent } from 'react';
import styles from './SearchBar.module.css';

import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const searchValue =
    typeof router.query.name === 'string' ? router.query.name : '';
  const limit =
    typeof router.query.limit === 'string' ? router.query.limit : '20';
  const page = typeof router.query.page === 'string' ? router.query.page : 1;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    router.push(
      {
        pathname: router.pathname,
        query: { name: event.target.value, page: page, limit: limit },
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <section className={styles.searchWrap}>
      <input
        defaultValue={searchValue}
        className={styles.searchInput}
        onChange={handleChange}
      />
      <button type="button" className={styles.searchButton}>
        search
      </button>
    </section>
  );
}
