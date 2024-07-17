const Result = ({ player }) => {
  return (
    <>
      <h1 className="ttt-winner">{player ? "O Wins!" : "X Wins!"}</h1>
    </>
  );
};

export default Result;
