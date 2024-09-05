const StartCard = ({ startGame }) => {
  return (
    <div className="flex flex-col p-10 w-[70%] m-auto  bg-purple-800 items-center rounded-lg">
      <h2 className="text-2xl font-bold">Test your San Francisco knowledge!</h2>
      <button
        onClick={startGame}
        className="p-2 mt-5 rounded-md text-white bg-purple-400 w-24 hover:bg-purple-600"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartCard;
