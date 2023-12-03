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
  accept: Yup.string().required(),
  uploadPicture: Yup.mixed()
    .test(
      'fileSize',
      'File size is too big',
      (value) => (value as File).size <= 500000
    )
    .test('fileType', 'Must be jpeg or png', (value) =>
      ['image/png', 'image/jpeg'].includes((value as File).type)
    ),
  country: Yup.string().required('required field'),
});
