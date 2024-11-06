import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
    </div>
  );
}
