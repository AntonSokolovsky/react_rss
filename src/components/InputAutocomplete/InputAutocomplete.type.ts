import { UseFormRegister } from 'react-hook-form';
import { IFormData } from '../../types/FormDataType';

export interface IPropsAutoComplete {
  label: string;
  countries: string[];
  error: string;
  register?: UseFormRegister<IFormData>;
}
