import styles from './Cards.module.css';
import Card from '../Card/Card';
import { NavLink } from 'react-router-dom';
import { useCharactersContext } from '../../store';

export default function Cards() {
  const { characters } = useCharactersContext();
  return (
    <section className={styles.cardsWrap}>
      <ul className={styles.cardsList}>
        {characters?.map((item) => (
          <NavLink key={item.id} to={`/home/${item.id}`}>
            <Card character={item} key={item.id} />
          </NavLink>
        ))}
      </ul>
    </section>
  );
}
