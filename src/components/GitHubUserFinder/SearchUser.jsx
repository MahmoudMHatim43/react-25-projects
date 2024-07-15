import { FaSearch } from "react-icons/fa";
const SearchUser = ({ user, setUser, handle }) => {
  return (
    <div className="github-finder-search-container">
      <label htmlFor="github-search"></label>
      <input
        id="github-search"
        type="text"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button onClick={handle}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchUser;
