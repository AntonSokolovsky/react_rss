import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './SearchSlice.type';
import { RootState } from '..';

const initialState: SearchState = {
  searchValue: localStorage.getItem('searchValue') || '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
export const searchStateValue = (state: RootState) => state.search.searchValue;
