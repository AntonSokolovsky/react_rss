import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialStateFormData } from './FormDataSlice.type';
import { IFormData } from '../../types/FormDataType';

const initialState: IInitialStateFormData = {
  formData: null,
};

const formDataSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<IFormData>) {
      state.formData = action.payload;
    },
  },
});

export const { setFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
