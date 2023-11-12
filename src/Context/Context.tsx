import { createContext } from 'react';
import {
  IIsOpenDetailsContext,
  ISearchValueContext,
  ICharacterContext,
} from './Context.type';

export const IsOpenDetailsContext = createContext<null | IIsOpenDetailsContext>(
  null
);

export const SearchValueContext = createContext<null | ISearchValueContext>(
  null
);

export const CharactersContext = createContext<null | ICharacterContext>(null);
