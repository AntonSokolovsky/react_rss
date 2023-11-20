import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialStateCharacters } from './CharactersSlice.type';
import { ICharacter } from '../../types/Character';

const initialState: IInitialStateCharacters = {
  list: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<ICharacter[]>) {
      state.list = action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
