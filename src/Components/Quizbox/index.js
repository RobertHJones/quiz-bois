import React from "react";
import "./index.css";

export default function Quizbox({ data }) {
  return (
    <section className="quiz">
      {data !== undefined && (
        <div className="question-container">
          <h2>{data.results[0].question}</h2>
        </div>
      )}
      <div className="answers-container">
        <button className="answer-a">{data.results[0].correct_answer}</button>
        <button className="answer-b">
          {data.results[0].incorrect_answers[0]}
        </button>
        <button className="answer-c">
          {data.results[0].incorrect_answers[1]}
        </button>
        <button className="answer-d">
          {data.results[0].incorrect_answers[2]}
        </button>
      </div>
      <div className="scrolling">
        <button className="previous">Previous question</button>
        <button className="next">Next question</button>
      </div>
    </section>
  );
}
