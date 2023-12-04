import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);
export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^([А-Я]|[A-Z])([а-яё]|[A-z])*$/, 'First letter must be uppercase')
    .required('required field'),
  age: Yup.number()
    .typeError('must be a number')
    .required('required field')
    .positive(),
  email: Yup.string().email().required('required field'),
  password: Yup.string()
    .min(8, 'must be 8 symbols')
    .minNumbers(1, 'must contain at least 1 number')
    .minUppercase(1, 'must contain at least 1 upper case letter')
    .minLowercase(1, 'must contain at least 1 lower case letter')
    .minSymbols(1, 'must contain at least 1 special character')
    .required('required field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'must match with value of password field')
    .required('required field'),
  gender: Yup.string().required('required field'),
  accept: Yup.boolean().isTrue('Must be checked').required(),
  uploadPicture: Yup.mixed()
    .test('fileSize', 'Must be jpeg or png and size < 5mb', (value) => {
      if (value instanceof File) {
        return value.size <= 500000;
      } else if (value instanceof FileList) {
        if (value.length) {
          return value[0].size <= 500000;
        }
      }
    })
    .test('fileType', 'Must be jpeg or png', (value) => {
      if (value && value !== 'undefined')
        if (value instanceof File) {
          return ['image/png', 'image/jpeg'].includes((value as File).type);
        } else if (value instanceof FileList) {
          if (value.length) {
            return ['image/png', 'image/jpeg'].includes(value[0].type);
          }
        }
    }) as Yup.MixedSchema<File>,
  country: Yup.string().required('required field'),
});
