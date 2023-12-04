import { FormSchema } from '../../validation/FormSchema';
import styles from './FormWithHook.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputAutoComplete from '../../components/InputAutocomplete/InputAutocomplete';
import { ErrorsFields } from '../../validation/ErrorsFields';
import { Fields } from '../FormUncontrol/Fields';
import { useAppSelector } from '../../store';
import { useNavigate } from 'react-router-dom';

type FieldsEnum =
  | 'name'
  | 'email'
  | 'age'
  | 'password'
  | 'confirmPassword'
  | 'gender'
  | 'accept'
  | 'uploadPicture'
  | 'country';

export default function FormWithHook() {
  const navigate = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(FormSchema),
  });
  const onSubmit = () => {
    reset();
    navigate('/home');
  };
  const countries = useAppSelector((state) => state.countries.countries);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Fields.map(({ name, label, error, type, select }) => (
          <div key={name}>
            <label className={styles.label}>
              <span className={styles.titleField}>{label}</span>
              {!select ? (
                <input
                  {...register(name as FieldsEnum)}
                  style={{
                    borderColor: ErrorsFields[error] !== ' ' ? 'red' : 'black',
                  }}
                  className={styles.input}
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
            <span className={styles.error}>{errors[error]?.message}</span>
          </div>
        ))}
        <InputAutoComplete
          label="Country"
          countries={countries}
          error={'country'}
        />
        <span className={styles.error}>{errors['country']?.message}</span>
        <input type="submit" disabled={!!Object.keys(errors).length} />
      </form>
    </div>
  );
}
