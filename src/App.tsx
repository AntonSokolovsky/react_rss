import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { useState } from 'react';
import {
  CharactersContext,
  IsOpenDetailsContext,
  SearchValueContext,
} from './Context/Context';
import { ICharacter } from './types/Character';

export default function App() {
  const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(
    () => localStorage.getItem('searchValue') || ''
  );
  const [characters, setCharacters] = useState<ICharacter[] | null>(null);
  return (
    <IsOpenDetailsContext.Provider value={{ isOpenDetails, setIsOpenDetails }}>
      <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
        <CharactersContext.Provider value={{ characters, setCharacters }}>
          <RouterProvider router={router} />
        </CharactersContext.Provider>
      </SearchValueContext.Provider>
    </IsOpenDetailsContext.Provider>
  );
}
