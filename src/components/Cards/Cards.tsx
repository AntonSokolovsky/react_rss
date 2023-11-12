import React from 'react';
import styles from './Cards.module.css';
import Card from '../Card/Card';
import { CardsProps } from '../../types/Character';
import { Link } from 'react-router-dom';

export default function Cards(props: CardsProps) {
  return (
    <section className={styles.cardsWrap}>
      <ul className={styles.cardsList}>
        {props.characters?.map((item) => (
          <Link key={item.id} to={`/home/${item.id}`}>
            <Card
              openDetails={props.openDetails}
              character={item}
              key={item.id}
            />
          </Link>
        ))}
      </ul>
    </section>
  );
}
