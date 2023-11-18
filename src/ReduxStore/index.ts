import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './CharactersSlice/CharactersSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './CharactersSlice';
