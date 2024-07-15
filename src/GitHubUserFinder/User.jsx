import "./github-user.css";
import Profile from "./Profile";
import Connections from "./Connections";
import Links from "./Links";
const User = ({ data }) => {
  const { avatar_url, followers, following, public_repos, html_url, id, bio, name } = data;
  return (
    <div className="github-user-details" key={id}>
      <Profile avatar={avatar_url} name={name} bio={bio} />
      <Connections followers={followers} following={following} repos={public_repos} />
      <Links link={html_url} />
    </div>
  );
};

export default User;
