import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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

  const { upperText, dashbordText, buttonText = 'Cypher AI' } =
    routeTexts[location.pathname] || routeTexts['/'];

  const handleButtonClick = () => {
    if (location.pathname === '/incidents') {
      navigate('/incidents/new');
    } else if (location.pathname === '/locations') {
      navigate('/locations/new');
    } else {
      navigate('/cypher');
    }
  };

  return (
    <div className={cn('flex flex-col sm:flex-row items-center justify-between mx-3 sm:mx-10 md:mx-5 lg:mx-30 gap-4')}>
      <div className="flex-1 mt-0 sm:mt-5">
        <UpperText>{upperText}</UpperText>

        {location.pathname === '/locations' ? (
          <div className="flex items-center gap-2">
            <img src="/frog.svg" alt="DR-4699" className="w-6 h-6 object-contain" />
            <DashbordText>DR-4699 March 2023 Severe Storms</DashbordText>
          </div>
        ) : (
          <DashbordText>{dashbordText}</DashbordText>
        )}
      </div>

      <div className={cn('flex flex-col sm:flex-row gap-2 sm:gap-5', className)}>
        <SearchBar />
        <SortFilter />
        <Button className="mx-17 sm:mx-0 flex items-center gap-2" onClick={handleButtonClick}>
          {(location.pathname === '/incidents' || location.pathname === '/locations') && (
            <FontAwesomeIcon icon={faPlus} />
          )}
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default DashBord;
