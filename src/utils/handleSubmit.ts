import { IFormData } from '../types/FormDataType';
import { FormFields } from '../types/FormFields';
import { FormSchema } from '../validation/FormSchema';
import { validate } from '../validation/Validation';

export const handleSubmit: React.FormEventHandler<
  HTMLFormElement & FormFields
> = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const obj = Object.create({});
  for (const key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  validate(FormSchema, obj as IFormData);
};
