import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashBord from './Components/DashBord';


function Layout() {
  const location = useLocation();

  const routeName = {
    '/': 'Dashboard',
    '/incidents': 'Incidents',
    '/locations': 'Locations',
    '/activities': 'Activities',
    '/documents': 'Documents',
    '/cypher-ai': 'Cypher AI'
  }[location.pathname] || 'Dashboard';

  return (
    <>
      <NavBar />
      <DashBord title={routeName} />
      <main className="mx-3 sm:mx-10 md:mx-5 lg:mx-30 my-4">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
