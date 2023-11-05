import { Character } from '../../types/Character';
import styles from './Card.module.css';
import React from 'react';

export default function Card(props: Character) {
  return (
    <article className={styles.cardWrap}>
      <img
        src={props.image}
        alt={props.name + 'photo'}
        className={styles.cardImage}
      ></img>
      <h3 className={styles.cardTitle}>{props.name}</h3>
      <ul className={styles.cardList}>
        <li className={styles.cardField}>
          <span className={styles.cardFieldName}>Type: </span>
          {props.type}
        </li>
        <li className={styles.cardField}>
          <span className={styles.cardFieldName}>Gender: </span>
          {props.gender}
        </li>
        <li className={styles.cardField}>
          <span className={styles.cardFieldName}>Species: </span>
          {props.species}
        </li>
        <li className={styles.cardField}>
          <span className={styles.cardFieldName}>Status: </span>
          {props.status}
        </li>
      </ul>
    </article>
  );
}
