import "./github-user.css";
const User = ({ data }) => {
  return (
    <>
      <div className="github-user-details" key={data.id}>
        <div className="github-user-profile">
          <img src={data.avatar_url} alt={data.login} />
          <h2>{data.name}</h2>
        </div>
        <div className="github-user-follow-info">
          <div className="followers">
            <h3>Followers</h3>
            <h4>{data.followers}</h4>
          </div>
          <div className="following">
            <h3>Followers</h3>
            <h4>{data.following}</h4>
          </div>
          <div className="repos">
            <h3>Public Repos</h3>
            <h4>{data.public_repos}</h4>
          </div>
        </div>
        <div className="github-user-bio">{data.bio}</div>
        <div className="github-user-repos"></div>
        <div className="github-user-account-link">
          <a href={data.html_url}>Go To Account</a>
        </div>
      </div>{" "}
    </>
  );
};

export default User;
