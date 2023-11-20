import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../ReduxStore/hooks';
import { setCountCards } from '../../ReduxStore/CountCardsSlice';

export default function CountCards() {
  const options = [20, 12, 8];
  const dispatch = useAppDispatch();
  const handleChangeCount = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCountCards(Number(event.target.value)));
  };
  return (
    <div>
      <select onChange={handleChangeCount}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
