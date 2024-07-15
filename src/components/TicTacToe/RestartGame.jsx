import Result from "./Result";
const RestartGame = ({ pass }) => {
  const { player, setWin, setSquares, tie, setTie } = pass;
  return (
    <>
      <Result player={player} tie={tie} />
      <button
        className="ttt-reset-btn"
        onClick={() => {
          setWin(false);
          setTie(false);
          setSquares(Array(9).fill("."));
        }}
      >
        Restart
      </button>
    </>
  );
};

export default RestartGame;
