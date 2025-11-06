/*
  Author: Mahmoud Esmat
  date  : 6-11-2025
*/

// =============== Elements ===============
// Tags
let footerParagrah = document.querySelector("footer p");
let navParagrah = document.querySelector("nav p");
let fillBar = document.querySelector("nav div");
let mainBody = document.querySelector("main");
let AllLis = "";

// Buttons
let checkBtn = document.querySelector("#check-btn");
let nextBtn = document.querySelector("#next-btn");

// =============== Global variable ===============
let questions = [];
let questionIndex = 0;
let chosenAnswer = "";
let chosenAnswerIndex = 0;
let checked = false;
let score = 0;

// for counter Down
let counter = 15;
let time;

// =============== Eventes ===============
checkBtn.addEventListener("click", answerChecked);
nextBtn.addEventListener("click", nextQuestion);

// =============== Function ===============
async function getQuestions() {
  // get all questions
  let questionSelected = await fetch("questions.json");
  questions = await questionSelected.json();

  fillBodyOfQuestion();
  time = setInterval(changeTime, 1000);
}

function fillBodyOfQuestion() {
  mainBody.innerHTML = "";

  if (questionIndex < questions.length) {
    // Question head
    const h2 = document.createElement("h2");
    h2.textContent = `${questions[questionIndex].question}`;
    mainBody.appendChild(h2);

    // Answers
    let ul = document.createElement("ul");
    for (let i = 1; i <= 4; i++) {
      ul.innerHTML += `
          <li onclick="answerClicked(${i})">
          ${questions[questionIndex][`answer_${i}`]}
            <span class="material-symbols-outlined">
              check_circle
            </span>
          </li>
        `;
    }
    mainBody.appendChild(ul);

    // Question number
    footerParagrah.textContent = `
      ${questionIndex + 1} of ${questions.length} Questions
    `;

    fillBar.style.width = `${(questionIndex / questions.length) * 100}%`;
  } else {
    // score is appear at end of exam
    mainBody.innerHTML = `<h1>The Result is: ${score}/${questions.length}</h1>`;
    navParagrah.innerHTML = "Done";
    clearInterval(time);
    fillBar.style.width = "100%";
  }
}

function answerClicked(index) {
  if (!checked) {
    let lis = document.querySelectorAll("main ul li");
    AllLis = lis;

    // Hide all spans
    lis.forEach((li) => {
      li.querySelector("span").style.visibility = "hidden";
    });

    // Visible chosen answer icon
    lis[index - 1].querySelector("span").style.visibility = "visible";

    // Save chosen answer
    chosenAnswer = `answer_${index}`;
    chosenAnswerIndex = index;
  }
}

function answerChecked() {
  // if no answer selected
  if (!chosenAnswer) {
    alert("Please choose an answer first!");
    return;
  }

  if (!checked) {
    const userAnswer = questions[questionIndex][chosenAnswer];
    const correctAnswer = questions[questionIndex].right_answer;

    // Remove old classes
    AllLis.forEach((li) => li.classList.remove("right", "wrong"));

    if (userAnswer === correctAnswer) {
      // Correct answer
      AllLis[chosenAnswerIndex - 1].classList.add("right");
      score++;
    } else {
      // Wrong answer
      AllLis[chosenAnswerIndex - 1].querySelector("span").textContent =
        "cancel";
      AllLis[chosenAnswerIndex - 1].classList.add("wrong");

      // Highlight the correct answer
      AllLis.forEach((li, index) => {
        if (questions[questionIndex][`answer_${index + 1}`] === correctAnswer) {
          li.classList.add("right");
          li.querySelector("span").style.visibility = "visible";
        }
      });
    }

    // Disable clicking answers
    AllLis.forEach((li) => {
      li.style.cursor = "auto";
      li.style.pointerEvents = "none";
    });

    // Control button states
    checkBtn.classList.add("disabled");
    nextBtn.classList.remove("disabled");

    checked = true;
  }
}

function nextQuestion() {
  if (questionIndex < questions.length - 1) {
    if (!chosenAnswer) {
      alert("Please check the answer first!");
      return;
    }

    if (checked) {
      questionIndex++;
      fillBodyOfQuestion();

      // Reset states
      nextBtn.classList.add("disabled");
      checkBtn.classList.remove("disabled");
      checked = false;
      chosenAnswer = "";
      counter = 15;
    }
  } else {
    // Last question reached
    nextBtn.classList.add("disabled");
    checkBtn.classList.add("disabled");
    questionIndex++;
    fillBodyOfQuestion();
  }
}

function changeTime() {
  if (questionIndex < questions.length) {
    if (counter >= 0) {
      // Display formatted timer (00:xx)
      navParagrah.textContent =
        counter >= 10 ? `00:${counter}` : `00:0${counter}`;
      counter--;
    } else {
      // Auto move to next question when time ends
      counter = 15;
      questionIndex++;
      fillBodyOfQuestion();
    }
  } else {
    navParagrah.textContent = "Done";
    clearInterval(time);
  }
}

// =============== Initial call ===============
getQuestions();
