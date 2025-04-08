import React from 'react';
import { useLocation } from 'react-router-dom';
import DashbordText from './CommonComponents/DashbordText';
import SearchBar from './CommonComponents/SearchBar';
import SortFilter from './CommonComponents/SortFilter';
import Button from './CommonComponents/Button';
import UpperText from './CommonComponents/UpperText';
import { cn } from '../lib/utlities';

function DashBord({ className }) {
  const location = useLocation();

  // Define the texts based on the current route
  const routeTexts = {
    '/': { upperText: 'Welcome back', dashbordText: 'Dashboard' },
    '/incidents': { upperText: 'Home - Incidents', dashbordText: 'Incidents' },
    '/locations': { upperText: 'Incidents - DR-4699 March 2023 Severe Storms ', dashbordText: 'Locations' },
    '/activities': { upperText: 'Activity Log', dashbordText: 'Activities' },
    '/documents': { upperText: 'Document Center', dashbordText: 'Documents' },
    '/cypher': { upperText: 'AI Insights', dashbordText: 'Cypher AI' },
  };

  const { upperText, dashbordText } = routeTexts[location.pathname] || routeTexts['/'];

  return (
    //
    <div className={cn('flex flex-col sm:flex-row items-center justify-between mx-3 sm:mx-10 md:mx-5 lg:mx-30 gap-4')}>
      <div className="flex-1 mt-0 sm:mt-5">
        <UpperText>{upperText}</UpperText>
        <DashbordText>{dashbordText}</DashbordText>
      </div>
      <div className={cn('flex flex-col sm:flex-row gap-2 sm:gap-5', className)}>
        <SearchBar />
        <SortFilter />
        <Button className='mx-17 sm:mx-0'>Cypher AI</Button>
      </div>
    </div>
  );
}

export default DashBord;