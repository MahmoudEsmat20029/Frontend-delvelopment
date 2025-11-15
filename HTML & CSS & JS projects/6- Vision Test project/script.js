// ============== Global Variables ==============
const closedInstructionsBtn = document.querySelector("#close-btn");
const openInstructionsBtn = document.querySelector("#open-btn");
const bluerDiv = document.querySelector("#bluer-div");
const character = document.querySelector(".char");
const resultText = document.querySelector("#result-text");
const questionsNumber = document.querySelector(".questionsNumber");
const distanceText = document.createElement("p");

const Arrows = document.querySelectorAll(".arrows button");
const Up = document.querySelector("#up");
const Down = document.querySelector("#down");
const Right = document.querySelector("#right");
const Left = document.querySelector("#left");

// Add distance instruction at top
document.querySelector(".container header").appendChild(distanceText);
distanceText.innerText = "Stand ~2 meters from the screen";
distanceText.style.fontSize = "18px";
distanceText.style.color = "#fff";
distanceText.style.margin = "5px 0";

let Questions = [];
let counter = 0;
let result = 0;

// ============== Events ==============
closedInstructionsBtn.addEventListener("click", () => {
  bluerDiv.style.display = "none";
});

openInstructionsBtn.addEventListener("click", () => {
  bluerDiv.style.display = "block";
});

Up.addEventListener("click", () => handleClick("up", Up));
Down.addEventListener("click", () => handleClick("down", Down));
Right.addEventListener("click", () => handleClick("right", Right));
Left.addEventListener("click", () => handleClick("left", Left));

// ============== Functions ==============
async function fetchData() {
  const response = await fetch("questions.json");
  const data = await response.json();
  Questions = [...data];

  // Show first question
  showQuestion();
}

function handleClick(userAnswer, btn) {
  // Visual feedback: highlight button briefly
  btn.style.backgroundColor = "rgba(33, 33, 119, 1)";
  setTimeout(() => {
    btn.style.backgroundColor = "rgba(64, 100, 136, 0.5)";
  }, 300);

  checkAnswer(userAnswer);
  counter++;
  showQuestion();
}

function moveCharacter(direction) {
  switch (direction) {
    case "up":
      character.style.borderColor = "transparent #123 #123 #123";
      break;
    case "down":
      character.style.borderColor = "#123 #123 transparent #123";
      break;
    case "right":
      character.style.borderColor = "#123 transparent #123 #123";
      break;
    case "left":
      character.style.borderColor = "#123 #123 #123 transparent";
      break;
    default:
      character.style.borderColor = "#123 #123 #123 #123";
  }
}

function showQuestion() {
  if (counter >= Questions.length) {
    resultText.innerText = `Your score is ${result}/${Questions.length}`;
    resultText.style.display = "block";
    character.style.display = "none";
    Arrows.forEach((arrow) => (arrow.style.display = "none"));
    questionsNumber.style.display = "none";
    distanceText.style.display = "none";
    return;
  }

  const current = Questions[counter];

  // Animate circle size change smoothly
  character.style.transition =
    "width 0.5s, height 0.5s, border-width 0.5s, border-color 0.5s";
  moveCharacter(current.direction);
  character.style.borderWidth = current.borderSize || "40px";
  character.style.width = current.size || "100px";
  character.style.height = current.size || "100px";

  questionsNumber.innerText = `Question ${counter + 1}/${Questions.length}`;
}

function checkAnswer(selectedAnswer) {
  const current = Questions[counter];
  if (current && current.direction === selectedAnswer) {
    result++;
  }
}

// ============== Initial Call ==============
fetchData();
