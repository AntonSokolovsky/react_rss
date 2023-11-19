import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styles from './SearchBar.module.css';
import { useAppDispatch, useAppSelector } from '../../ReduxStore/hooks';
import { setSearchValue } from '../../ReduxStore/SearchSlice';

export default function Search() {
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(searchValue);

  function search() {
    dispatch(setSearchValue(`?name=${value}`));
    localStorage.setItem('searchValue', value);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <section className={styles.searchWrap}>
      <input
        className={styles.searchInput}
        value={value}
        onChange={handleChange}
      />
      <button onClick={search} type="button" className={styles.searchButton}>
        search
      </button>
    </section>
  );
}
