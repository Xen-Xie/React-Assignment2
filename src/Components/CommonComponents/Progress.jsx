import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';

function Progress({ progress = 25 }) {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  const handleBack = () => {
    if (currentPath === '/incidents/new') {
      navigate('/incidents');
    } else if (currentPath === '/incidents/new/new-step') {
      navigate('/incidents/new');
    } else if (currentPath === '/incidents/new/new-step/second-step') {
      navigate('/incidents/new/new-step');
    } else if (currentPath === '/incidents/new/new-step/second-step/final') {
      navigate('/incidents/new/new-step/second-step');
    }
  };

  const handleNext = () => {
    if (currentPath === '/incidents/new') {
      navigate('/incidents/new/new-step');
    } else if (currentPath === '/incidents/new/new-step') {
      navigate('/incidents/new/new-step/second-step');
    } else if (currentPath === '/incidents/new/new-step/second-step') {
      navigate('/incidents/new/new-step/second-step/final');
    }
  };

  const shouldShowNext =
    currentPath === '/incidents/new' ||
    currentPath === '/incidents/new/new-step' ||
    currentPath === '/incidents/new/new-step/second-step';

  return (
    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#E4E4E7] px-4 xl:px-30 py-5 gap-4 sm:gap-6">
      
      {/* Left: Texts */}
      <div className="flex flex-col min-w-[150px]">
        <p className="text-[10px] sm:text-xs text-secondary">
          Home - Incidents - New Incident
        </p>
        <h2 className="text-base sm:text-xl font-bold text-accent">
          New Incident
        </h2>
      </div>

      {/* Center: Progress Bar */}
      <div className="w-full sm:flex-1 mx-0 sm:mx-4">
        <div className="w-full h-1 bg-[#E5E7EB] rounded-full overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Right: Buttons */}
      <div className="flex gap-2 sm:gap-3 shrink-0">
        <Button
          onClick={handleBack}
          className="text-xs px-3 py-1 sm:px-4 sm:py-2 bg-foreground text-secondary hover:bg-foreground/65 border border-[#D4D4D8]"
        >
          Back
        </Button>

        {shouldShowNext && (
          <Button
            onClick={handleNext}
            className="text-xs px-3 py-1 sm:px-4 sm:py-2"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default Progress;
