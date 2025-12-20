import { useState, useEffect } from "react";

export default function MainComponent() {
  const [boxArr, setIsX] = useState(["", "", "", "", "", "", "", "", ""]);
  const [next, setNext] = useState("X");
  const [checkWin, setCheckWin] = useState(null);

  function handleClick(index) {
    if (boxArr[index] !== "" || checkWin) return;

    let newArr = [...boxArr];
    newArr[index] = next;

    setIsX(newArr);
    setNext(next === "X" ? "O" : "X");
  }

  useEffect(() => {
    checkWinFun();
    checkDraw();
  }, [boxArr]);

  function checkWinFun() {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of wins) {
      if (boxArr[a] === boxArr[b] && boxArr[a] === boxArr[c] && boxArr[a]) {
        setCheckWin(boxArr[a]);
        return;
      }
    }
  }

  function checkDraw() {
    if (checkWin) return;

    const isDraw = boxArr.every((box) => box !== "");

    if (isDraw) {
      setCheckWin("Draw");
    }
  }

  function resetGame() {
    setIsX(["", "", "", "", "", "", "", "", ""]);
    setNext("X");
    setCheckWin(null);
  }

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>

      <hr />
      {checkWin && (
        <h2>
          {checkWin === "Draw" ? "No one wins 🤝" : `${checkWin} is Winner 🎉`}
        </h2>
      )}

      <div className="content">
        {boxArr.map((box, index) => {
          return (
            <div
              key={index}
              className={boxArr[index] === "X" ? "box x-box" : "box o-box"}
              onClick={() => handleClick(index)}
            >
              {box}
            </div>
          );
        })}
      </div>

      <button onClick={resetGame}>Reset</button>
    </div>
  );
}
