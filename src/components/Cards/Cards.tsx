import styles from './Cards.module.css';
import Card from '../Card/Card';
import { useAppSelector } from '../../ReduxStore/hooks';

export default function Cards() {
  const characters = useAppSelector((state) => {
    return state.characters.list;
  });
  return (
    <section className={styles.cardsWrap}>
      <ul className={styles.cardsList}>
        {characters?.map((item) => <Card character={item} key={item.id} />)}
      </ul>
    </section>
  );
}
