import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponse } from '../../types/Response';
import { ICharacter } from '../../types/Character';

const baseUrl = 'https://rickandmortyapi.com/api';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    searhCharacters: build.query<IResponse, string>({
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
  useSearhCharactersQuery,
  useGetCharacterByIdQuery,
  useLazyPaginationCharactersQuery,
} = characterApi;
