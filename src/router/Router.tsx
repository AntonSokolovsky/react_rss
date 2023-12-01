import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const FormUncontrol = lazy(
  () => import('../pages/FormUncontrol/FormUncontrol')
);
const FormWithHook = lazy(() => import('../pages/FormWithHook/FormWithHook'));

export const PATH = {
  HOME: 'home',
  FORM_WITH_HOOK: 'form-with-hook',
  FORM_UNCONTROL: 'form-uncontrol',
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={'/home'} />,
      },
      {
        path: PATH.HOME,
        element: <HomePage />,
      },
      {
        path: PATH.FORM_UNCONTROL,
        element: <FormUncontrol />,
      },
      {
        path: PATH.FORM_WITH_HOOK,
        element: <FormWithHook />,
      },
    ],
  },
]);
