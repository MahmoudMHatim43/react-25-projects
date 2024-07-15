import Square from "./Square";
const PlayGame = ({ pass }) => {
  const { player } = pass;
  return (
    <>
      <div className="ttt-header">
        <h1>Tic Tac Toe Game</h1>
        <p>
          Two players, X and O, take turns marking a square. The game is won by the player who gets
          three of their symbols in a row, column or diagonally.
        </p>
      </div>
      <div className="ttt-container">
        <h2> {player ? "X Turn" : "O Turn"}</h2>
        <div className="ttt-row">
          <Square pass={pass} id={0} />
          <Square pass={pass} id={1} />
          <Square pass={pass} id={2} />
        </div>
        <div className="ttt-row">
          <Square pass={pass} id={3} />
          <Square pass={pass} id={4} />
          <Square pass={pass} id={5} />
        </div>
        <div className="ttt-row">
          <Square pass={pass} id={6} />
          <Square pass={pass} id={7} />
          <Square pass={pass} id={8} />
        </div>
      </div>
    </>
  );
};

export default PlayGame;
