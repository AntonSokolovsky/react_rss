import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './CharactersSlice/CharactersSlice';
import searchReducer from './SearchSlice/SearchSlice';
import { characterApi } from '../components/Api/CharactersApi';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    search: searchReducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './CharactersSlice';
export * from './SearchSlice';
