import {
  Navigate,
  // Outlet,
  // Route,
  createBrowserRouter,
  // createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '../components/Layout';
import { lazy } from 'react';
// import { IsOpenDetailsContext } from '../Context/Context';

const Mainpage = lazy(() => import('../Pages/Mainpage'));
const CharacterDetails = lazy(
  () => import('../Pages/CharacterDetails/CharacterDetalils')
);

export const router = createBrowserRouter([
  {
    path: '/',
    // Component() {
    //   return (
    //     <IsOpenDetailsContext.Provider value={value}>
    //       <Outlet />
    //     </IsOpenDetailsContext.Provider>
    //   );
    // },
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={'/home'} />,
      },
      {
        path: 'home',
        element: <Mainpage />,
        children: [{ path: ':characterId', element: <CharacterDetails /> }],
      },
    ],
  },
]);

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <IsOpenDetailsContext.Provider value={}>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Navigate to="/home" />} />
//         <Route path={'home'} element={<Mainpage />}>
//           <Route path=":characterId" element={<CharacterDetails />} />
//         </Route>
//       </Route>
//     </IsOpenDetailsContext.Provider>
//   )
// );
