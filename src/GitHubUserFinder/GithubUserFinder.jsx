import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import User from "./User";
const GithubUserFinder = ({ url }) => {
  // https://api.github.com/users
  const [data, setData] = useState(null);
  const [user, setUser] = useState("octocat");
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  async function fetchUserData(username) {
    try {
      setLoading(true);
      const response = await fetch(url + username);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setErrMessage(error.message);
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchUserData(user);
    setUser("");
  }
  return (
    <div className="github-finder-container">
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
        <button onClick={handleSubmit}>
          <FaSearch />
        </button>
      </div>
      {data !== null ? (
        loading ? (
          <h1>Loading...</h1>
        ) : errMessage !== null ? (
          <h1>Error:{errMessage}</h1>
        ) : (
          <User data={data} />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default GithubUserFinder;
