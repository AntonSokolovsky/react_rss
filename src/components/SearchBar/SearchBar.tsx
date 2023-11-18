import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styles from './SearchBar.module.css';
import { useSearchValueContext } from '../../store';

export default function Search() {
  const { searchValue, setSearchValue } = useSearchValueContext();
  const [value, setValue] = useState(searchValue);

  function search() {
    setSearchValue(value);
    localStorage.setItem('searchValue', searchValue);
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
