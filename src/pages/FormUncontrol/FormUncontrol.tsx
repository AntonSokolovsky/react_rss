import styles from './FormUncontrol.module.css';
import { Fields } from './Fields';
import { ErrorsFields } from '../../validation/ErrorsFields';
import { useReducer } from 'react';
import { validate } from '../../validation/Validation';
import { FormSchema } from '../../validation/FormSchema';
import { FormFields } from '../../types/FormFields';
import InputAutoComplete from '../../components/InputAutocomplete/InputAutocomplete';
import { useAppDispatch, useAppSelector } from '../../store';
import { useNavigate } from 'react-router-dom';
import { setFormData } from '../../store/FormDataSlice/FormDataSlice';

export default function FormUncontrol() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries.countries);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    event
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const obj = Object.create({});
    for (const key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    validate(FormSchema, obj);
    forceUpdate();
    if (ErrorsFields['confirmPassword'] === ' ') {
      dispatch(setFormData(obj));
      navigate('/home');
    }
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      {Fields.map(({ name, label, error, type, select }) => (
        <div key={name}>
          <label className={styles.label}>
            <span className={styles.titleField}>{label}</span>
            {!select ? (
              <input
                style={{
                  borderColor: ErrorsFields[error] !== ' ' ? 'red' : 'black',
                }}
                className={styles.input}
                name={name}
                type={type}
              />
            ) : (
              <select className={styles.input} name={name}>
                {select.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            )}
          </label>
          <span className={styles.error}>{ErrorsFields[error]}</span>
        </div>
      ))}
      <InputAutoComplete
        label="Country"
        countries={countries}
        error={'country'}
      />
      <span className={styles.error}>{ErrorsFields['country']}</span>
      <button type="submit">Submit</button>
    </form>
  );
}
