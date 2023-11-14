import { createContext, useContext, useState } from 'react';
import { ICharactersProps, ICharacters } from './CharactersProvider.type';
import { ICharacter } from '../../types/Character';

export const CharactersContext = createContext<ICharacters>({
  characters: [],
  setCharacters: () => {},
});

export const CharactersProvider = ({ children }: ICharactersProps) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharactersContext = () => {
  const { characters, setCharacters } = useContext(CharactersContext);
  return { characters, setCharacters };
};
