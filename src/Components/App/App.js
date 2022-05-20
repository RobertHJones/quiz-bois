import "./App.css";
import Quizbox from "../Quizbox";
import { useState, useEffect } from "react";

function App() {
  const [quiz, setQuiz] = useState([]);

  async function fetchQuiz() {
    const response = await fetch(`https://opentdb.com/api.php?amount=10`);
    const data = await response.json();
    console.log(data.results);
    setQuiz(data.results);
  }
  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <div className="App">
      <h1>The Big Quiz</h1>
      <Quizbox data={quiz} />
    </div>
  );
}

export default App;
