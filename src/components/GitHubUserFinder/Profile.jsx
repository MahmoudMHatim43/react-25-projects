const Profile = ({ avatar, bio, name }) => {
  return (
    <>
      <div className="github-user-profile">
        <img src={avatar} alt={name} />
        <h2>{name}</h2>
      </div>
      <div className="github-user-bio">
        <p>{bio}</p>
      </div>
    </>
  );
};

export default Profile;
