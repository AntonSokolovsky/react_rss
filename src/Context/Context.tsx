import { createContext } from 'react';
import IIsOpenDetailsContext from './IsOpenDetailsContext.type';

export const IsOpenDetailsContext = createContext<null | IIsOpenDetailsContext>(
  null
);
