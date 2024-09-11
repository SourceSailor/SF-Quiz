import { useState, useCallback } from "react";
import { quizData } from "./data";

export function useQuizState() {
  const [gameState, setGameState] = useState({
    startGame: false,
    gameOver: false,
    questionIndex: 0,
    playerData: [],
  });

  const { questionIndex } = gameState;

  const quizQuestion = quizData[questionIndex].question;
  const quizAnswers = quizData[questionIndex].answers;
  const lastQuestion = questionIndex === quizData.length - 1;

  function onStartGame() {
    setGameState((prevState) => ({ ...prevState, startGame: true }));
  }

  function updatePlayerData(data) {
    setGameState((prevData) => ({
      ...prevData,
      playerData: [
        ...prevData.playerData,
        {
          id: questionIndex + 1,
          question: quizQuestion,
          text: data.text,
          isCorrect: data.isCorrect,
        },
      ],
    }));
  }

  const onResetGame = useCallback(() => {
    setGameState({
      startGame: false,
      gameOver: false,
      questionIndex: 0,
      playerData: [],
    });
  }, []);

  const onNextQuestion = useCallback(() => {
    if (questionIndex < quizData.length - 1) {
      setGameState((prevState) => ({
        ...prevState,
        questionIndex: prevState.questionIndex + 1,
      }));
    } else {
      setGameState((prevState) => ({
        ...prevState,
        gameOver: true,
      }));
    }
  }, [questionIndex]);

  return {
    gameState,
    quizQuestion,
    quizAnswers,
    lastQuestion,
    onStartGame,
    updatePlayerData,
    onResetGame,
    onNextQuestion,
  };
}
