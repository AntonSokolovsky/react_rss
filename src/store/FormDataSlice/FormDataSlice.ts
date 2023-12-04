import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialStateFormData } from './FormDataSlice.type';
import { IFormData } from '../../types/FormDataType';

const initialState: IInitialStateFormData = {
  formData: [],
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<IFormData[]>) {
      // state.formData?.push(action.payload);
      state.formData = action.payload;
    },
  },
});

export const { setFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
