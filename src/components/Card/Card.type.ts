import { ICharacter } from '../../types/Character';

export interface ICardProps {
  character: ICharacter;
  openDetails: () => void;
}
