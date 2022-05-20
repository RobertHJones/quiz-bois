import "./App.css";
import Quizbox from "../Quizbox";
import { useState, useEffect } from "react";

const quizAPI = {
  key: process.env.REACT_APP_API_KEY,
  url: "https://quizapi.io/api/v1/questions1",
  limit: 10,
};

function App() {
  const [quiz, setQuiz] = useState({});

  async function fetchQuiz() {
    const response = await fetch(`https://quizapi.io/api/v1/questions`, {
      headers: {
        "X-Api-Key": `${quizAPI.key}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setQuiz(data);
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
