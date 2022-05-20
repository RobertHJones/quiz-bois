import React from "react";
import "./index.css";
import { useState } from "react";

export default function Quizbox({ data }) {
  const [number, setNumber] = useState(0);

  return (
    <section className="quiz">
      <div className="question-container">
        {data.length === 0 && <p>Loading</p>}
        {data.length > 0 && (
          <div>
            <h2 className="category">Category: {data[number].category}</h2>
            <h2 className="question">{data[number].question}</h2>
          </div>
        )}
      </div>

      <div className="answers-container">
        {data.length === 0 && <p>Loading</p>}
        {data.length > 0 && (
          <div>
            <button className="answer-a">{data[number].correct_answer}</button>
            <button className="answer-b">
              {data[number].incorrect_answers[0]}
            </button>
            <button className="answer-c">
              {data[number].incorrect_answers[1]}
            </button>
            <button className="answer-d">
              {data[number].incorrect_answers[2]}
            </button>
          </div>
        )}
      </div>
      <div className="scrolling">
        <button className="previous" onClick={() => setNumber(number - 1)}>
          Previous question
        </button>
        <button className="next" onClick={() => setNumber(number + 1)}>
          Next question
        </button>
      </div>
    </section>
  );
}
