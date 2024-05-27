import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div>
      <button>
        <FontAwesomeIcon icon={faSearch} color="white" size="lg"/>
      </button>
    </div>
  );
};

export default SearchBar;
