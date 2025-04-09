import React from 'react';

const ProgressBar = () => {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="flex items-center w-full max-w-xl px-4">
        {[1, 2, 3].map((step, index) => (
          <React.Fragment key={step}>
            {/* Step Dot */}
            <div className="w-5 h-5 bg-gray-300 rounded-full z-10" />
            
            {/* Line between steps (not after the last dot) */}
            {index < 2 && (
              <div className="flex-1 h-0.5 bg-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
