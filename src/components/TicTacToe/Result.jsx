const Result = ({ player, tie }) => {
  return (
    <>
      <h1 className="ttt-winner">{tie ? "Tie!" : player ? "O Wins!" : "X Wins!"}</h1>
    </>
  );
};

export default Result;
