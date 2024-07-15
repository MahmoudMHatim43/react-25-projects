const Square = ({ pass, id }) => {
  const { squares, setSquares, player, setPlayer } = pass;
  function choosePlayer(event) {
    if (event.target.innerText === ".") {
      event.target.innerText = player ? "X" : "O";
      setSquares(squares.map((item, index) => (index === id ? (player ? "X" : "O") : item)));
      setPlayer(!player);
    }
  }
  return (
    <button
      className="ttt-cell"
      onClick={(e) => {
        choosePlayer(e);
      }}
    >
      .
    </button>
  );
};

export default Square;
