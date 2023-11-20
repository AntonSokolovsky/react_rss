import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IsLoadingCardsState } from './IsLoadingCardsSlice.type';

const initialState: IsLoadingCardsState = {
  isLoadingCards: false,
};

const IsLoadingCardsSlice = createSlice({
  name: 'isLoadingCards',
  initialState,
  reducers: {
    setIsLoadingCards(state, action: PayloadAction<boolean>) {
      state.isLoadingCards = action.payload;
    },
  },
});

export const { setIsLoadingCards } = IsLoadingCardsSlice.actions;
export default IsLoadingCardsSlice.reducer;
