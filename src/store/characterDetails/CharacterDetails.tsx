import { createContext, useContext, useState } from 'react';
import {
  ICharacterDetails,
  ICharacterDetailsProps,
} from './CharacterDetails.type';

const CharacterDetailsContext = createContext<ICharacterDetails>({
  isOpen: false,
  setIsOpen: () => {},
});

export const CharacterDetails = ({ children }: ICharacterDetailsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <CharacterDetailsContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CharacterDetailsContext.Provider>
  );
};

export const useCharacterDetailsContext = () => {
  const { isOpen, setIsOpen } = useContext(CharacterDetailsContext);
  return { isOpen, setIsOpen };
};
