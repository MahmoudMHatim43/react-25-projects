import React from "react";

const Connections = ({ followers, following, repos }) => {
  return (
    <>
      <div className="github-user-follow-info">
        <div className="followers">
          <h3>Followers</h3>
          <h4>{followers}</h4>
        </div>
        <div className="following">
          <h3>Followers</h3>
          <h4>{following}</h4>
        </div>
        <div className="repos">
          <h3>Public Repos</h3>
          <h4>{repos}</h4>
        </div>
      </div>
    </>
  );
};

export default Connections;
