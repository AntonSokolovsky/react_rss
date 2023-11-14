import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';
import { ICardProps } from './Card.type';
import { useCharacterDetailsContext } from '../../store';

export default function Card(props: ICardProps) {
  const { setIsOpen } = useCharacterDetailsContext();
  const navigate = useNavigate();
  const handleNavigate = () => {
    setIsOpen(true);
    navigate(`/home/${props.character.id}`);
  };
  return (
    <article data-testid={'card'} className={styles.cardWrap}>
      <img
        src={props.character.image}
        alt={props.character.name + 'photo'}
        className={styles.cardImage}
        onClick={handleNavigate}
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
