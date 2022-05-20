import "./App.css";
import Quizbox from "../Quizbox";
import { useEffect } from "react";

const quizAPI = {
  key: process.env.REACT_APP_API_KEY,
  url: "https://quizapi.io/api/v1/questions1",
  limit: 10,
};

function App() {
  async function fetchQuiz() {
    const response = await fetch(
      // `${quizAPI.url}/${quizAPI.key}/${quizAPI.limit}`
      `https://quizapi.io/api/v1/questions`,
      {
        headers: {
          "X-Api-Key": "SvibEz6MaaoNDKqkpmjkLWJQylK0zEsWVX05Hnqm",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <div className="App">
      <h1>The Big Quiz</h1>
      <Quizbox />
    </div>
  );
}

export default App;
