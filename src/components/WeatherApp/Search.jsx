import React from "react";

function Search({ search, setSearch, handleSearch }) {
  const valid = search.length < 5 ? false : true;
  return (
    <div className="weather-search-container">
      <label htmlFor="search-weather"></label>
      <input
        name="search-weather"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => handleSearch(search)} disabled={!valid}>
        Search
      </button>
    </div>
  );
}

export default Search;
