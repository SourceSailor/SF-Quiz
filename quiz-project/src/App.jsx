import StartCard from "./components/StartCard";

import "./App.css";
import QuizCard from "./components/QuizCard";

function App() {
  return (
    <>
      <h1 className="text-4xl font-extrabold mb-10">San Francisco Quiz</h1>

      <StartCard />

      <QuizCard />
    </>
  );
}

export default App;
