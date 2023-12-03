import {
  ErrorsFields,
  IErrorsFields,
  InitialErrorsFields,
} from './ErrorsFields';
import * as Yup from 'yup';
import type { Schema, AnyObject } from 'yup';

export const validate = <T extends AnyObject>(
  Schema: Schema<T>,
  data: IErrorsFields
) => {
  for (const key of Object.keys(InitialErrorsFields)) {
    ErrorsFields[key as keyof typeof ErrorsFields] =
      InitialErrorsFields[key as keyof typeof InitialErrorsFields];
  }
  try {
    Schema.validateSync(data, { abortEarly: false });
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      error.inner.forEach((validationError) => {
        const path = validationError.path as string;
        const message = validationError.message as string;

        ErrorsFields[path as keyof typeof ErrorsFields] = message;
      });
    } else {
      return;
    }
  }
};
