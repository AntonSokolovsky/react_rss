import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './CharactersSlice/CharactersSlice';
import searchReducer from './SearchSlice/SearchSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    search: searchReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './CharactersSlice';
export * from './CharactersSlice';
