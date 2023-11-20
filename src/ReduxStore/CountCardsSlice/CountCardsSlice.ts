import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountCardsState } from './CountCardsSlice.type';

const defaultCountCards = 20;

const initialState: CountCardsState = {
  countCards: defaultCountCards,
};

const countCardsSlice = createSlice({
  name: 'countCards',
  initialState,
  reducers: {
    setCountCards(state, action: PayloadAction<number>) {
      state.countCards = action.payload;
    },
  },
});

export const { setCountCards } = countCardsSlice.actions;
export default countCardsSlice.reducer;
