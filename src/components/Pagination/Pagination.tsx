import { clsx } from '../../Utils/clsx';
import styles from './Pagination.module.css';
import { IPaginationProps } from './Pagination.type';

export const Pagination = ({
  page,
  next,
  prev,
  onAction,
}: IPaginationProps) => {
  const handleClick = (value: string | null) => {
    return () => {
      if (!value) {
        return;
      }
      onAction(value);
    };
  };

  return (
    <div className={styles.pagination}>
      <button
        disabled={!prev}
        className={clsx(styles.button, styles.buttonLeft)}
        onClick={handleClick(prev)}
      >
        prev
      </button>
      <p className={styles.numberPage}>{page}</p>
      <button
        disabled={!next}
        className={clsx(styles.button, styles.buttonRight)}
        onClick={handleClick(next)}
      >
        next
      </button>
    </div>
  );
};
