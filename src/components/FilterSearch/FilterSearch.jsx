import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import "./filter-search.css";
const FilterSearch = ({ url }) => {
  // the API url => "https://dummyjson.com/users"
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  async function getUsersName() {
    try {
      setLoading(true);
      const respond = await fetch(url);
      const data = await respond.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((person) => person.firstName + " " + person.lastName));
        setLoading(false);
      }
    } catch (error) {
      setErrMsg(error.message);
      console.log(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    getUsersName();
  }, []);
  return loading ? (
    <h1>Loading...</h1>
  ) : errMsg !== null ? (
    <h1>Error Fetching Data</h1>
  ) : (
    <div>
      <SearchBox searchParam={searchParam} setSearchParam={setSearchParam} />
      <SearchResults
        users={users}
        filterUsers={filterUsers}
        setFilterUsers={setFilterUsers}
        searchParam={searchParam}
        setSearchParam={setSearchParam}
      />
    </div>
  );
};

export default FilterSearch;
