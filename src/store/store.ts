import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './FormDataSlice/FormDataSlice';
import errorFieldReducer from './ErrorFieldSlice/ErrorFieldSlice';
import countriesReducer from './CountrySlice/CountrySlice';

const store = configureStore({
  reducer: {
    formData: formDataReducer,
    errorField: errorFieldReducer,
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
