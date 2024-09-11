import StartCard from "./components/StartCard";
import QuizCard from "./components/QuizCard";
import { quizData } from "./data";
import { useQuizState } from "./functions";

import "./App.css";
import EndCard from "./components/EndCard";

function App() {
  const {
    gameState,
    quizQuestion,
    quizAnswers,
    lastQuestion,
    onStartGame,
    updatePlayerData,
    onResetGame,
    onNextQuestion,
  } = useQuizState();

  const { startGame, gameOver, questionIndex, playerData } = gameState;

  return (
    <>
      <header>
        <h1 className="text-4xl font-extrabold mb-10">San Francisco Quiz</h1>
      </header>

      <section>
        {!startGame && <StartCard startGame={onStartGame} />}

        {startGame && !gameOver && (
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

        {gameOver && (
          <EndCard playerData={playerData} onResetGame={onResetGame} />
        )}
      </section>
    </>
  );
}

export default App;
