import { useRouter } from 'next/router';
import styles from './Card.module.css';
import { ICardProps } from './Card.type';
import Image from 'next/image';

export const BLUR_IMAGE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mN0cAipZyACMI4qpK9CAI/7DUlmLGLbAAAAAElFTkSuQmCC';

export default function Card(props: ICardProps) {
  const router = useRouter();
  const page = router.query.page;
  const searchValue = router.query.name;
  const limit =
    typeof router.query.limit === 'string' ? router.query.limit : '20';

  const handleNavigate = (id: number) => {
    return () =>
      router.push(
        {
          pathname: router.pathname,
          query: { details: id, page: page, name: searchValue, limit: limit },
        },
        undefined,
        { scroll: false }
      );
  };
  return (
    <article data-testid={'card'} className={styles.cardWrap}>
      <Image
        width={150}
        height={150}
        src={props.character.image}
        alt={props.character.name + 'photo'}
        placeholder="blur"
        blurDataURL={BLUR_IMAGE}
        className={styles.cardImage}
        onClick={handleNavigate(props.character.id)}
      />
      <h3 className={styles.cardTitle}>{props.character.name}</h3>
      <ul className={styles.cardList}>
        <li className={styles.cardField}>
          <span className={styles.cardFieldName}>Type: </span>
          {props.character.type}
        </li>
        <li className={styles.cardField}>
          <span className={styles.cardFieldName}>Gender: </span>
          {props.character.gender}
        </li>
        <li className={styles.cardField}>
          <span className={styles.cardFieldName}>Species: </span>
          {props.character.species}
        </li>
        <li className={styles.cardField}>
          <span className={styles.cardFieldName}>Status: </span>
          {props.character.status}
        </li>
      </ul>
    </article>
  );
}
