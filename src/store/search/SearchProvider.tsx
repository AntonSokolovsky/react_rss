import { createContext, useContext, useState } from 'react';
import {
  ISearchProviderProps,
  ISearchValueContext,
} from './SearchProvider.type';

const SearchValueContext = createContext<ISearchValueContext>({
  searchValue: '',
  setSearchValue: () => {},
});

export const SearchProvider = ({ children }: ISearchProviderProps) => {
  const [searchValue, setSearchValue] = useState<string>(
    () => localStorage.getItem('searchValue') || ''
  );
  return (
    <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchValueContext.Provider>
  );
};

export const useSearchValueContext = () => {
  const { searchValue, setSearchValue } = useContext(SearchValueContext);
  return { searchValue, setSearchValue };
};
