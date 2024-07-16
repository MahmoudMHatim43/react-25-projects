const Square = ({ pass, id }) => {
  const { squares, setSquares, player, setPlayer, xs, os, setXs, setOs } = pass;
  function choosePlayer(event) {
    if (event.target.innerText === ".") {
      event.target.innerText = player ? "X" : "O";
      if (xs.length < 4 || os.length < 4) {
        player ? setXs([...xs, id]) : setOs([...os, id]);
      }

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
      {squares[id]}
    </button>
  );
};

export default Square;
