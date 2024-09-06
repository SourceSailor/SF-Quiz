const QuizCard = ({
  quizQuestion,
  quizAnswers,
  onNextQuestion,
  updatePlayerData,
  playerData,
  questionIndex,
  lastQuestion,
}) => {
  const currentPlayerAnswer = playerData[questionIndex];
  const currentCorrectAnswerIndex = quizAnswers.findIndex(
    (idx) => idx.isCorrect === true
  );

  return (
    <div className="flex flex-col m-auto px-8 py-5 w-[70%] rounded-lg bg-purple-800 justify-center">
      <h4 className="mb-5 text-2xl">{quizQuestion}</h4>

      {/* Displaying the correct answer if incorrect */}
      {currentPlayerAnswer !== undefined &&
        currentPlayerAnswer.isCorrect === false && (
          <p className="text-lg mb-2">
            The correct answer is {quizAnswers[currentCorrectAnswerIndex].text}
          </p>
        )}

      {/* Mapping all of the quiz answers from the quiz data array */}
      {quizAnswers.map((answer) => (
        <button
          key={answer.id}
          className={`flex flex-col my-1 p-3 rounded-3xl items-center justify-center bg-purple-400 hover:bg-purple-600 ${
            currentPlayerAnswer !== undefined
              ? answer.isCorrect === false
                ? "bg-red-500 hover:bg-red-500"
                : "bg-green-500 hover:bg-green-500"
              : "bg-purple-400 hover:bg-purple-600 "
          }`}
          // Diable clicking once an answer has been selected
          disabled={currentPlayerAnswer !== undefined}
          // Updating the Player Data State
          onClick={() => updatePlayerData(answer, quizQuestion)}
        >
          {answer.text}
        </button>
      ))}

      {/* Button that selects the next object in the Quiz Data array */}

      <button
        disabled={currentPlayerAnswer === undefined}
        onClick={onNextQuestion}
        className="w-40 mt-3 p-2 text-left rounded-lg hover:text-purple-300"
      >
        {!lastQuestion ? "Next Question" : "Submit Answers"}
      </button>
    </div>
  );
};

export default QuizCard;
