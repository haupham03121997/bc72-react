import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { PATH } from '../../routes/path';

export default function AuthLayout({ children }) {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  if (currentUser) {
    if (currentUser.maLoaiNguoiDung === 'QuanTri') {
      return <Navigate to={PATH.ADMIN} />;
    } else {
      return <Navigate to={PATH.HOME} />;
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="rounded-2xl p-8">
        <div className="w-full flex items-center justify-center mb-6">
          <img src="/vite.svg" className="w-14 cursor-pointer" alt="logo" onClick={() => navigate(PATH.HOME)} />
        </div>
        {children}
        <Outlet />
      </div>
    </div>
  );
}
