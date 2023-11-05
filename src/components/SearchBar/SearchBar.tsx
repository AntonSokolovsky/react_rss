import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import Api from '../Api/api';

export default function Search() {
  const [value, setValue] = useState('');

  async function search() {
    const data = await Api.searchCharactersByName(value);
    return data.results;
  }

  return (
    <section className={styles.searchWrap}>
      <input
        className={styles.searchInput}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={search} type="button" className={styles.searchButton}>
        search
      </button>
    </section>
  );
}
