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
      style={{ color: squares[id] == "X" ? "red" : squares[id] == "O" ? "darkblue" : "#ababab" }}
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
