import { useRoutes } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import MainLayout from '../layouts/MainLayout/MainLayout';
import LoginPage from '../modules/auth/Login/LoginPage';
import RegisterPage from '../modules/auth/Register/RegisterPage';
import HomePage from '../modules/home/HomePage/HomePage';
import { PATH } from './path';

export default function useRouteElements() {
  const elements = useRoutes([
    {
      path: PATH.AUTH,
      element: <AuthLayout />,
      children: [
        {
          path: PATH.LOGIN,
          element: <LoginPage />,
        },
        {
          path: PATH.REGISTER,
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '/about',
          element: <div>About</div>,
        },
      ],
    },
  ]);
  return elements;
}
