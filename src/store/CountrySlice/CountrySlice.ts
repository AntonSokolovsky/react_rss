import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryArray } from '../../constants/CountryArray';
import { IInitialStateCountrySlice } from './CountrySlice.type';

const initialState: IInitialStateCountrySlice = {
  countries: CountryArray,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries(state, action: PayloadAction<string[]>) {
      state.countries = action.payload;
    },
  },
});

export const { setCountries } = countrySlice.actions;
export default countrySlice.reducer;
