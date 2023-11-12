import { ReactNode } from 'react';
import { ICharacter } from '../../types/Character';

export interface ICharacters {
  characters: ICharacter[] | null;
  setCharacters: (value: ICharacter[]) => void;
}

export interface ICharactersProps {
  children: ReactNode;
}
