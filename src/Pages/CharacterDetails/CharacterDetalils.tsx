import { useParams } from 'react-router-dom';
import styles from './CharacterDetails.module.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ICharacter } from '../../types/Character';
import { useCharacterDetailsContext } from '../../store';
import { useGetCharacterByIdQuery } from '../../components/Api/CharactersApi';

function CharacterDetalils() {
  const { characterId } = useParams();
  const [characterDetailPage, setCaracterDetailPage] =
    useState<ICharacter | null>(null);
  const { isOpen, setIsOpen } = useCharacterDetailsContext();
  const { data } = useGetCharacterByIdQuery(characterId || '');

  useLayoutEffect(() => {
    if (isOpen) {
      return;
    }
    setIsOpen(true);
  }, [isOpen, setIsOpen]);
  //ToDo: delete after checking by mentor
  // useEffect(() => {
  //   if (!characterId) {
  //     return;
  //   }
  //   fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
  //     .then<ICharacter>((data) => data.json())
  //     .then((data) => setCaracterDetailPage(data));
  // }, [characterId]);
  useEffect(() => {
    if (!characterId || !data) {
      return;
    }
    setCaracterDetailPage(data);
  }, [characterId, data]);
  return (
    <>
      {isOpen ? (
        <div data-testid={'detail'} className={styles.cardWrapper}>
          <div>
            {characterDetailPage && (
              <article data-testid={'details'} className={styles.cardWrap}>
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
        </div>
      ) : null}
    </>
  );
}

export default CharacterDetalils;
