import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IErrorsFields } from '../../validation/ErrorsFields';
import { IInitialStateErrorField } from './ErrorFieldSlice.type';

const ErrorsFields: IErrorsFields = {
  name: ' ',
  password: ' ',
  country: ' ',
};

const initialState: IInitialStateErrorField = {
  errorField: ErrorsFields,
};

const errorFieldSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setErrorField(state, action: PayloadAction<IErrorsFields>) {
      state.errorField = action.payload;
    },
  },
});

export const { setErrorField } = errorFieldSlice.actions;
export default errorFieldSlice.reducer;
