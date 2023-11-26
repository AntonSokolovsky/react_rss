import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { characterApi } from './CharactersApi';

const store = () => {
  return configureStore({
    reducer: {
      [characterApi.reducerPath]: characterApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(characterApi.middleware),
  });
};

export default store;
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(store, { debug: true });
