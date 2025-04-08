import { useState } from 'react';

const SortFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState('Date modified');

  const options = ['Date modified', 'Date created', 'Name'];

  const handleSelect = (option) => {
    setSortOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-[188px] h-[42px] bg-foreground rounded-lg px-4 py-2 shadow-sm text-secondary font-medium focus:outline-none flex items-center justify-start"
      >
        <span className="text-tertiary mr-1 whitespace-nowrap flex-shrink-0">Sort By:</span>
        <span className="truncate">{sortOption}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full sm:w-[148px] bg-white rounded-md shadow-lg z-10">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 text-sm text-secondary hover:text-primary transition-colors duration-150 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortFilter;