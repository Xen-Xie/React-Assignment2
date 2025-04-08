import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="bg-foreground rounded-lg px-2 sm:px-4 py-1 sm:py-2 flex items-center w-full sm:w-[190px] h-10 sm:h-[42px] max-w-md shadow-sm">
      <FontAwesomeIcon icon={faSearch} className="text-tertiary mr-2" />
      <input
        type="text"
        placeholder="Search incident"
        className="bg-transparent focus:outline-none w-full text-secondary placeholder-tertiary"
      />
    </div>
  );
};

export default SearchBar;