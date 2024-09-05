import { useState } from "react";

import { quizData } from "../data.js";

const QuizCard = () => {
  const [currentQuizQuestionIndex, setCurrentQuizQuestionIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [userData, setUserData] = useState([]);

  const currentQuestion = quizData[currentQuizQuestionIndex];

  function onUserSubmission(questionData) {
    setUserData((prevData) => [
      ...prevData,
      { question: currentQuestion.question, text: questionData.text },
    ]);

    if (currentQuizQuestionIndex < quizData.length - 1) {
      setCurrentQuizQuestionIndex((prevIdx) => prevIdx + 1);
    } else {
      setGameOver(true);
    }
  }
  console.log(gameOver);
  return (
    <div className="flex flex-col m-auto p-10 w-[70%] rounded-lg bg-purple-800">
      {!gameOver ? (
        <>
          <h4 className="mb-5">{currentQuestion.question}</h4>
          {currentQuestion.answers.map((question) => (
            <div
              className="flex flex-col my-1 p-3 rounded-3xl items-center justify-center bg-purple-400 hover:bg-purple-600"
              key={question.text}
              onClick={() => onUserSubmission(question)}
            >
              <button>{question.text} </button>
            </div>
          ))}
        </>
      ) : (
        "GAME OVER"
      )}
    </div>
  );
};

export default QuizCard;
