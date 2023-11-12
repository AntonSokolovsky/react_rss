import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { useState } from 'react';
import { IsOpenDetailsContext } from './Context/Context';

export default function App() {
  const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);
  return (
    <IsOpenDetailsContext.Provider value={{ isOpenDetails, setIsOpenDetails }}>
      <RouterProvider router={router} />
    </IsOpenDetailsContext.Provider>
  );
}
