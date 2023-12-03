import { ErrorsFields } from '../../validation/ErrorsFields';

interface ISelectField {
  value: string;
  label: string;
}

interface IFields {
  label: string;
  name: string;
  type: 'text' | 'number' | 'email' | 'password' | '' | 'checkbox' | 'file';
  error: keyof typeof ErrorsFields;
  select?: ISelectField[];
}

export const Fields: IFields[] = [
  { label: 'Name', type: 'text', name: 'name', error: 'name' },
  { label: 'Age', type: 'number', name: 'age', error: 'age' },
  { label: 'Email', type: 'text', name: 'email', error: 'email' },
  { label: 'Password', type: 'password', name: 'password', error: 'password' },
  {
    label: 'Confirm password',
    type: 'password',
    name: 'confirmPassword',
    error: 'confirmPassword',
  },
  {
    label: 'Gender',
    type: '',
    name: 'gender',
    error: 'gender',
    select: [
      {
        value: 'male',
        label: 'Male',
      },
      { value: 'female', label: 'Female' },
    ],
  },
  { label: 'Accept T&C', type: 'checkbox', name: 'accept', error: 'accept' },
  {
    label: 'Upload picture',
    type: 'file',
    name: 'uploadPicture',
    error: 'uploadPicture',
  },
];
