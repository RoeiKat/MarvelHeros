import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchButton = function () {
  return (
    <button type="submit" className="btn btn-danger col-10">
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
};

export default SearchButton;
