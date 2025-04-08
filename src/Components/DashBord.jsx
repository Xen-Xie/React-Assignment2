import React from 'react';
import { useLocation } from 'react-router-dom';
import DashbordText from './CommonComponents/DashbordText';
import SearchBar from './CommonComponents/SearchBar';
import SortFilter from './CommonComponents/SortFilter';
import Button from './CommonComponents/Button';
import UpperText from './CommonComponents/UpperText';
import { cn } from '../lib/utlities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function DashBord({ className }) {
  const location = useLocation();

  // Define the texts based on the current route
  const routeTexts = {
    '/': {
      upperText: 'Welcome back',
      dashbordText: 'Dashboard',
      buttonText: 'Cypher AI',
    },
    '/incidents': {
      upperText: 'Home - Incidents',
      dashbordText: 'Incidents',
      buttonText: 'New Incident',
    },
    '/locations': {
      upperText: 'Incidents - DR-4699 March 2023 Severe Storms',
      dashbordText: 'Locations',
      buttonText: 'New Location',
    },
    '/activities': {
      upperText: 'Activity Log',
      dashbordText: 'Activities',
      buttonText: 'Cypher AI',
    },
    '/documents': {
      upperText: 'Document Center',
      dashbordText: 'Documents',
      buttonText: 'Cypher AI',
    },
    '/cypher': {
      upperText: 'AI Insights',
      dashbordText: 'Cypher AI',
      buttonText: 'Cypher AI',
    },
  };

  const {
    upperText,
    dashbordText,
    buttonText = 'Cypher AI',
  } = routeTexts[location.pathname] || routeTexts['/'];

  return (
    <div className={cn('flex flex-col sm:flex-row items-center justify-between mx-3 sm:mx-10 md:mx-5 lg:mx-30 gap-4')}>
      <div className="flex-1 mt-0 sm:mt-5">
        <UpperText>{upperText}</UpperText>
        <DashbordText>{dashbordText}</DashbordText>
      </div>
      <div className={cn('flex flex-col sm:flex-row gap-2 sm:gap-5', className)}>
        <SearchBar />
        <SortFilter />
        <Button className="mx-17 sm:mx-0 flex items-center gap-2">
  {location.pathname === '/incidents' && <FontAwesomeIcon icon={faPlus} />}
  {location.pathname === '/locations' && <FontAwesomeIcon icon={faPlus} />}
  {buttonText}
</Button>


      </div>
    </div>
  );
}

export default DashBord;
