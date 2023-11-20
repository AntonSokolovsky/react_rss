import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IsLoadingDetailsState } from './IsLoadingDetailsSlice.type';

const initialState: IsLoadingDetailsState = {
  isLoadingDetails: false,
};

const IsLoadingDetailsSlice = createSlice({
  name: 'isLoadingDetails',
  initialState,
  reducers: {
    setIsLoadingDetails(state, action: PayloadAction<boolean>) {
      state.isLoadingDetails = action.payload;
    },
  },
});

export const { setIsLoadingDetails } = IsLoadingDetailsSlice.actions;
export default IsLoadingDetailsSlice.reducer;
