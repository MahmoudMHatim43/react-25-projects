import { useState } from "react";
import User from "./User";
import SearchUser from "./SearchUser";
const GithubUserFinder = ({ url }) => {
  // https://api.github.com/users/
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
      <SearchUser user={user} setUser={setUser} handle={handleSubmit} />
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
