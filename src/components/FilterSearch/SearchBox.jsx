import { FaSearch } from "react-icons/fa";
const SearchBox = ({ searchParam, setSearchParam }) => {
  return (
    <div className="filter-search-search-container">
      <label htmlFor="search-filter-input"></label>
      <input
        type="text"
        id="search-filter-input"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
      />
      <FaSearch className="filter-search-icon" />
    </div>
  );
};

export default SearchBox;
