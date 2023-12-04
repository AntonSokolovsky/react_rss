import { useAppSelector } from '../../store';
import styles from './HomePage.module.css';

export default function HomePage() {
  const formData = useAppSelector((state) => state.formData.formData);
  return (
    <div className={styles.container}>
      <h3>FormData</h3>
      {formData &&
        formData.map((item, index, array) => (
          <li key={item.email}>
            <p>{array.length - 1 === index ? 'Last value' : ''}</p>
            <ul>
              {Object.entries(item).map(([key, value]) => (
                <li key={key + value}>
                  <p>{`${key}: ${value}`}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
    </div>
  );
}
