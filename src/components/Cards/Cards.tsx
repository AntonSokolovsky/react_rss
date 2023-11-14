import styles from './Cards.module.css';
import Card from '../Card/Card';
import { useCharactersContext } from '../../store';

export default function Cards() {
  const { characters } = useCharactersContext();
  return (
    <section className={styles.cardsWrap}>
      <ul className={styles.cardsList}>
        {characters?.map((item) => <Card character={item} key={item.id} />)}
      </ul>
    </section>
  );
}
