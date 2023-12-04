import { useAppSelector } from '../../store';
import styles from './HomePage.module.css';

export default function HomePage() {
  const formData = useAppSelector((state) => state.formData.formData);
  return (
    <div className={styles.container}>
      <h3>FormData</h3>
      <div>{JSON.stringify(formData)}</div>
    </div>
  );
}
