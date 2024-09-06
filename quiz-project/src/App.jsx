import { useState, useCallback } from "react";

import StartCard from "./components/StartCard";
import QuizCard from "./components/QuizCard";
import { quizData } from "./data";

import "./App.css";
import EndCard from "./components/EndCard";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [playerData, setPlayerData] = useState([]);

  const quizQuestion = quizData[questionIndex].question;
  const quizAnswers = quizData[questionIndex].answers;
  const lastQuestion = questionIndex === quizData.length - 1;

  function onStartGame() {
    setGameStart(true);
  }

  function updatePlayerData(data) {
    setPlayerData((prevData) => [
      ...prevData,

      {
        id: questionIndex + 1,
        question: quizQuestion,
        text: data.text,
        isCorrect: data.isCorrect,
      },
    ]);
  }

  const onNextQuestion = useCallback(() => {
    if (questionIndex < quizData.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setGameOver(true);
    }
  }, [questionIndex]);

  console.log("Player Data: ", playerData);
  return (
    <>
      <h1 className="text-4xl font-extrabold mb-10">San Francisco Quiz</h1>
      {!gameStart && <StartCard startGame={onStartGame} />}

      {gameStart && !gameOver && (
        <QuizCard
          lastQuestion={lastQuestion}
          quizData={quizData}
          updatePlayerData={updatePlayerData}
          onNextQuestion={onNextQuestion}
          questionIndex={questionIndex}
          quizQuestion={quizQuestion}
          quizAnswers={quizAnswers}
          playerData={playerData}
        />
      )}

      {gameOver && <EndCard playerData={playerData} />}
    </>
  );
}

export default App;
