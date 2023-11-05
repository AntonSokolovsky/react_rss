import React from 'react';
import styles from './Cards.module.css';
import Card from '../Card/Card';
import { CardsProps } from '../../types/Character';

export default function Cards(props: CardsProps) {
  return (
    <section className={styles.cardsWrap}>
      <ul className={styles.cardsList}>
        {props.characters.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}
