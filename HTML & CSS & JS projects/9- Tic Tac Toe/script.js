/*
  Author: Mahmoud Esmat
  Date  : 12-6-2025
*/

/* ============== Global Variables ============== */
const player = document.querySelector(".display .display-p span");
const playerSectionP = document.querySelector(".display .display-p");
const playerSectionWin = document.querySelector(".display .win");
const table = document.querySelectorAll(".table .square");
const resetBtn = document.querySelector(".button button");

// Variables
let nextPlayer = "X";
let gameOver = false;
let dotsInterval;

/* ============== Events ============== */
resetBtn.addEventListener("click", () => {
  table.forEach((sq) => (sq.textContent = ""));

  nextPlayer = "X";
  player.textContent = "X";
  playerSectionP.style.display = "block";
  playerSectionWin.style.display = "none";

  gameOver = false;
  clearInterval(dotsInterval);
});

/* ============== Functions ============== */
function squareClick(id) {
  if (gameOver || table[id].textContent !== "") return;

  table[id].textContent = nextPlayer;
  table[id].style.color = nextPlayer === "X" ? "green" : "blue";

  if (checkWinner()) {
    showWinner();
    gameOver = true;
    return;
  }

  if (checkDraw()) {
    showDraw();
    gameOver = true;
    return;
  }

  nextPlayer = nextPlayer === "X" ? "O" : "X";
  player.textContent = nextPlayer;
  player.style.color = nextPlayer === "X" ? "green" : "blue";
}

function checkWinner() {
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

  return wins.some(([a, b, c]) => {
    return (
      table[a].textContent &&
      table[a].textContent === table[b].textContent &&
      table[b].textContent === table[c].textContent
    );
  });
}

function showWinner() {
  playerSectionP.style.display = "none";
  playerSectionWin.style.display = "block";
  playerSectionWin.textContent = `Player ${nextPlayer} is winner`;

  dotsInterval = setInterval(() => {
    playerSectionWin.textContent += ".";
  }, 1000);
  setTimeout(() => {
    clearInterval(dotsInterval);
  }, 4000);
}

function checkDraw() {
  return [...table].every((sq) => sq.textContent !== "");
}

function showDraw() {
  playerSectionP.style.display = "none";
  playerSectionWin.style.display = "block";
  playerSectionWin.textContent = `Draw`;
}
