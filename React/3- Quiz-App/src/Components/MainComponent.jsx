import { useState } from "react";
import questions from "../questions.json";

export default function MainComponent() {
  // useState Hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const [reRender, setReRender] = useState(false);

  // Get current question
  const question = questions[currentQuestion];

  // Array of current answers to map into vision
  const answers = [
    question.answer_1,
    question.answer_2,
    question.answer_3,
    question.answer_4,
  ];

  // Local Functions
  function handleAnswerChoose(index) {
    // If i chosen before
    if (selectedAnswer !== null) return;

    const answerNumber = index + 1;
    setSelectedAnswer(answerNumber);

    if (question.right_answer === answerNumber) {
      setScore((prev) => prev + 1);
    }
  }

  function getClassName(index) {
    if (selectedAnswer === null) return "";

    const answerNumber = index + 1;

    if (answerNumber === question.right_answer) return "correct";
    if (answerNumber === selectedAnswer) return "wrong";

    return "";
  }

  function handleNextButton() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setReRender(true);
    }
  }

  return (
    <div className="container">
      <h1>Quiz APP</h1>
      <hr />

      {reRender ? (
        <>
          <h2>Your Score is {score}</h2>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setSelectedAnswer(null);
              setReRender(false);
            }}
          >
            Reset
          </button>
        </>
      ) : (
        <>
          <h2>{question.question}</h2>

          <ul>
            {answers.map((answer, index) => (
              <li
                key={index}
                onClick={() => handleAnswerChoose(index)}
                className={getClassName(index)}
              >
                {answer}
              </li>
            ))}
          </ul>

          <button onClick={handleNextButton} disabled={selectedAnswer === null}>
            Next
          </button>
          <p>
            {currentQuestion + 1} out of {questions.length} Questions
          </p>
        </>
      )}
    </div>
  );
}
