import { useEffect, useState } from "react";
import RestartGame from "./RestartGame";
import PlayGame from "./PlayGame";
import "./ttt.css";
const TicTacToe = () => {
  const [xs, setXs] = useState([]);
  const [os, setOs] = useState([]);
  const [squares, setSquares] = useState(Array(9).fill("."));
  const [player, setPlayer] = useState(true);
  const [win, setWin] = useState(null);
  const [tie, setTie] = useState(false);
  // console.log(os);
  useEffect(() => {
    winner();
  }, [squares]);
  const pass = {
    setTie,
    tie,
    squares,
    setSquares,
    player,
    setPlayer,
    win,
    setWin,
    xs,
    os,
    setXs,
    setOs,
  };
  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  function winner() {
    for (let i = 0; i < winPatterns.length; i++) {
      const [x, y, z] = winPatterns[i];
      if (squares[x] !== "." && squares[x] == squares[y] && squares[x] == squares[z]) {
        setWin(true);
        return;
      } else if (xs.length === 4 || os.length === 4) {
        if (xs.length === 4) {
          squares[xs[0]] = ".";
          setXs([xs[1], xs[2], xs[3]]);
          console.log(xs);
        }
        if (os.length === 4) {
          squares[os[0]] = ".";
          setOs([os[1], os[2], os[3]]);
          console.log(os);
        }
        return;
      }
    }
  }
  return <div>{win ? <RestartGame pass={pass} /> : <PlayGame pass={pass} />}</div>;
};

export default TicTacToe;
