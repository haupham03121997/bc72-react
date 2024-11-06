import { useRoutes } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import MainLayout from '../layouts/MainLayout/MainLayout';
import UserManagementPage from '../modules/admin/UserManagement/UserManagementPage';
import LoginPage from '../modules/auth/Login/LoginPage';
import RegisterPage from '../modules/auth/Register/RegisterPage';
import HomePage from '../modules/home/HomePage/HomePage';
import { PATH } from './path';
import MovieManagementPage from '../modules/admin/MovieManagement/MovieManagementPage';

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
      path: PATH.ADMIN,
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <div>Admin Overview</div>,
        },
        {
          path: PATH.USER_MANAGEMENT,
          element: <UserManagementPage />,
        },
        {
          path: PATH.MOVIE_MANAGEMENT,
          element: <MovieManagementPage />,
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
