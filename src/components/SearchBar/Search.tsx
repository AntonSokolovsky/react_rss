import React, { Component } from 'react';
import styles from './Search.module.css';

export default class SearchBar extends Component {
  render() {
    return (
      <section className={styles.searchWrap}>
        <input className={styles.searchInput}></input>
        <button type="button" className={styles.searchButton}>
          search
        </button>
      </section>
    );
  }
}
