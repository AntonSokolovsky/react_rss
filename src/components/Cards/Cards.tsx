import styles from './Cards.module.css';
import Card from '../Card/Card';
import { CardsProps } from '@/types/Character';
import { useRouter } from 'next/router';

export default function Cards({ characters }: CardsProps) {
  const router = useRouter();
  const limit =
    typeof router.query.limit === 'string' ? router.query.limit : '20';
  return (
    <section className={styles.cardsWrap}>
      <ul className={styles.cardsList}>
        {characters
          ?.filter((_, index) => index < Number(limit))
          .map((item) => <Card character={item} key={item.id} />)}
      </ul>
    </section>
  );
}
