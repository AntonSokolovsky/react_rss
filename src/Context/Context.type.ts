import { ICharacter } from '../types/Character';

export interface IIsOpenDetailsContext {
  isOpenDetails: boolean | null;
  setIsOpenDetails: (value: boolean) => void;
}

export interface ISearchValueContext {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export interface ICharacterContext {
  characters: ICharacter[] | null;
  setCharacters: (value: ICharacter[]) => void;
}
