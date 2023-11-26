import { useRouter } from 'next/router';
import { clsx } from '../../Utils/clsx';
import styles from './Pagination.module.css';
import { IPaginationProps } from './Pagination.type';

export const Pagination = ({ page, next, prev }: IPaginationProps) => {
  const router = useRouter();
  const limit =
    typeof router.query.limit === 'string' ? router.query.limit : '20';
  const searchValue = router.query.name;

  const handlePrevClick = () => {
    router.push(
      {
        pathname: router.pathname,
        query: { page: Number(page) - 1, name: searchValue, limit: limit },
      },
      undefined,
      { scroll: false }
    );
  };
  const handleNextClick = () => {
    router.push(
      {
        pathname: router.pathname,
        query: { page: Number(page) + 1, name: searchValue, limit: limit },
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <div className={styles.pagination}>
      <button
        disabled={!prev}
        className={clsx(styles.button, styles.buttonLeft)}
        onClick={handlePrevClick}
      >
        prev
      </button>
      <p className={styles.numberPage}>{page}</p>
      <button
        disabled={!next}
        className={clsx(styles.button, styles.buttonRight)}
        onClick={handleNextClick}
      >
        next
      </button>
    </div>
  );
};
