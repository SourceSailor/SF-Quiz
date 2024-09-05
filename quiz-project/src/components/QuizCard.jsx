const QuizCard = ({
  quizQuestion,
  quizAnswers,
  onNextQuestion,
  updatePlayerData,
  playerData,
  questionIndex,
}) => {
  const currentPlayerAnswer = playerData[questionIndex];
  console.log("Curr Player Ansswer: ", currentPlayerAnswer);
  return (
    <div className="flex flex-col m-auto px-8 py-5 w-[70%] rounded-lg bg-purple-800 h-[400px] justify-center">
      <h4 className="mb-5">{quizQuestion}</h4>
      {quizAnswers.map((answer) => (
        <button
          key={answer.id}
          className={`flex flex-col my-1 p-3 rounded-3xl items-center justify-center bg-purple-400 hover:bg-purple-600 ${
            currentPlayerAnswer !== undefined
              ? answer.isCorrect === false
                ? "bg-red-500 hover:disabled"
                : "bg-green-500 hover:disabled"
              : "bg-purple-400 hover:bg-purple-600 "
          }`}
          disabled={currentPlayerAnswer !== undefined}
          onClick={() => updatePlayerData(answer)}
        >
          {answer.text}
        </button>
      ))}
      <button
        onClick={onNextQuestion}
        className="mt-3 p-2 w-32 rounded-lg hover:text-purple-300"
      >
        Next Question
      </button>
    </div>
  );
};

export default QuizCard;
