import { useParams } from 'react-router-dom';
import styles from './CharacterDetails.module.css';
import { useEffect, useState } from 'react';
import { ICharacter } from '../../types/Character';

function CharacterDetalils() {
  const { characterId } = useParams();
  const [characterDetailPage, setCaracterDetailPage] =
    useState<ICharacter | null>(null);
  useEffect(() => {
    if (!characterId) {
      return;
    }
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then<ICharacter>((data) => data.json())
      .then((data) => setCaracterDetailPage(data));
  }, [characterId]);
  return (
    <div>
      {characterDetailPage && (
        <article className={styles.cardWrap}>
          <img
            src={characterDetailPage.image}
            alt={characterDetailPage.name + 'photo'}
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>{characterDetailPage.name}</h3>
          <ul className={styles.cardList}>
            <li className={styles.cardField}>
              <span className={styles.cardFieldName}>Type: </span>
              {characterDetailPage.type}
            </li>
            <li className={styles.cardField}>
              <span className={styles.cardFieldName}>Gender: </span>
              {characterDetailPage.gender}
            </li>
            <li className={styles.cardField}>
              <span className={styles.cardFieldName}>Species: </span>
              {characterDetailPage.species}
            </li>
            <li className={styles.cardField}>
              <span className={styles.cardFieldName}>Status: </span>
              {characterDetailPage.status}
            </li>
          </ul>
        </article>
      )}
    </div>
  );
}

export default CharacterDetalils;
