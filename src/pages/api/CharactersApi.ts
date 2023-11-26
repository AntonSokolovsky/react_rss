import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponse } from '../../types/Response';
import { ICharacter } from '../../types/Character';
import { HYDRATE } from 'next-redux-wrapper';

const baseUrl = 'https://rickandmortyapi.com/api';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    searchCharacters: build.query<IResponse, string>({
      query: (value = '') => ({
        url: `/character?name=${value}`,
      }),
    }),
    paginationCharacters: build.query<IResponse, string>({
      query: (value = '') => ({
        url: `/character${value}`,
      }),
    }),
    getCharacterById: build.query<ICharacter, string>({
      query: (value = '') => ({
        url: `/character/${value}`,
      }),
    }),
  }),
});

export const {
  useSearchCharactersQuery,
  useGetCharacterByIdQuery,
  useLazyPaginationCharactersQuery,
  util: { getRunningQueriesThunk },
} = characterApi;

export const { searchCharacters, paginationCharacters, getCharacterById } =
  characterApi.endpoints;
