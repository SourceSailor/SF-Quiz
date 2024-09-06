const EndCard = ({ playerData }) => {
  console.log(playerData);
  return (
    <section className="flex flex-col m-auto px-8 py-5 w-[70%] rounded-lg bg-purple-800 justify-center gap-10">
      <div className="flex flex-row items-center justify-center gap-5">
        <p>answered Correct: </p>
        <p>Overall Score: </p>
      </div>
      {playerData.map((response) => {
        return (
          <div
            className="flex flex-col items-center justify-center gap-2"
            key={response.id}
          >
            <p className="items-center justify-center flex rounded-full w-8 h-8 bg-stone-900 ">
              {response.id}
            </p>
            <h4 className="text-lg">{response.question}</h4>
            <p
              className={`text-lg ${
                response.isCorrect ? "text-green-500" : "text-red-500"
              }`}
            >
              {response.text}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default EndCard;
