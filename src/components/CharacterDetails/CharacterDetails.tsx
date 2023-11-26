import styles from './CharacterDetails.module.css';
import { ICharacter } from '../../types/Character';
import { useRouter } from 'next/router';
import Image from 'next/image';

function CharacterDetalils({ characters }: { characters: ICharacter[] }) {
  const router = useRouter();
  const isOpen =
    typeof router.query.details === 'string' ? router.query.details : '';
  const data = characters.find(
    (character) => character.id === Number(router.query.details)
  );
  return (
    <>
      {router.isFallback ? (
        <div style={{ color: 'red' }}>Loading...</div>
      ) : isOpen ? (
        <div data-testid={'detail'} className={styles.cardWrapper}>
          <div>
            {data && (
              <article data-testid={'details'} className={styles.cardWrap}>
                <Image
                  src={data.image}
                  alt={data.name + 'photo'}
                  className={styles.cardImage}
                  width={300}
                  height={300}
                />
                <h3 className={styles.cardTitle}>{data.name}</h3>
                <ul className={styles.cardList}>
                  <li className={styles.cardField}>
                    <span className={styles.cardFieldName}>Type: </span>
                    {data.type}
                  </li>
                  <li className={styles.cardField}>
                    <span className={styles.cardFieldName}>Gender: </span>
                    {data.gender}
                  </li>
                  <li className={styles.cardField}>
                    <span className={styles.cardFieldName}>Species: </span>
                    {data.species}
                  </li>
                  <li className={styles.cardField}>
                    <span className={styles.cardFieldName}>Status: </span>
                    {data.status}
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
