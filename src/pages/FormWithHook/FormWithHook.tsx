import { FormSchema } from '../../validation/FormSchema';
import styles from './FormWithHook.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputAutoComplete from '../../components/InputAutocomplete/InputAutocomplete';
import { ErrorsFields } from '../../validation/ErrorsFields';
import { Fields } from '../FormUncontrol/Fields';
import { useAppDispatch, useAppSelector } from '../../store';
import { useNavigate } from 'react-router-dom';
import { IFormData } from '../../types/FormDataType';
import { setFormData } from '../../store/FormDataSlice/FormDataSlice';

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>({
    mode: 'all',
    resolver: yupResolver(FormSchema),
  });
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    dispatch(setFormData(data));
    reset();
    navigate('/home');
  };
  const countries = useAppSelector((state) => state.countries.countries);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
                <select
                  {...register(name as FieldsEnum)}
                  className={styles.input}
                  name={name}
                >
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
          register={register}
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
