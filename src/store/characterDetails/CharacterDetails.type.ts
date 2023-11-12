import { ReactNode } from 'react';

export interface ICharacterDetails {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export interface ICharacterDetailsProps {
  children: ReactNode;
}
