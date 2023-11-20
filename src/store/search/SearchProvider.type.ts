import { ReactNode } from 'react';

export interface ISearchProviderProps {
  children: ReactNode;
}

export interface ISearchValueContext {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
