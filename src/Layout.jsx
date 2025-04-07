// Layout.jsx
import React from 'react';
import NavBar from './Components/NavBar';
import DashBord from './Components/DashBord';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <DashBord />
      <Outlet /> {/* 👈 this renders nested route components */}
    </div>
  );
};

export default Layout;
