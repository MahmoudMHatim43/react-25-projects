import { useEffect } from "react";
const SearchResults = (props) => {
  const { users, filterUsers, setFilterUsers, searchParam, setSearchParam } = props;
  function filterInput() {
    const query = searchParam.toLowerCase();
    setFilterUsers(users.filter((user) => user.toLowerCase().includes(query)));
  }
  function saveClick(event) {
    setSearchParam(event.target.innerText);
  }
  useEffect(() => {
    filterInput();
    if (searchParam.length == 0) {
      setFilterUsers([]);
    }
  }, [searchParam]);
  return (
    <div className="search-filter-result-container">
      {filterUsers.map((user) => (
        <h4
          key={crypto.randomUUID()}
          className="filter-result"
          onClick={(e) => {
            saveClick(e);
          }}
        >
          {user}
        </h4>
      ))}
    </div>
  );
};

export default SearchResults;
