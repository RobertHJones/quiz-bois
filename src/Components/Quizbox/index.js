import React from "react";
import "./index.css";

export default function Quizbox({ data }) {
  return (
    <section className="quiz">
      <div className="question-container">
        {data.length === 0 && <p>Loading</p>}
        {data.length > 0 && (
          <div>
            <h2 className="category">Category: {data[0].category}</h2>
            <h2 className="question">{data[0].question}</h2>
          </div>
        )}
      </div>

      <div className="answers-container">
        {data.length === 0 && <p>Loading</p>}
        {data.length > 0 && (
          <div>
            <button className="answer-a">{data[0].correct_answer}</button>
            <button className="answer-b">{data[0].incorrect_answers[0]}</button>
            <button className="answer-c">{data[0].incorrect_answers[1]}</button>
            <button className="answer-d">{data[0].incorrect_answers[2]}</button>
          </div>
        )}
      </div>
      <div className="scrolling">
        <button className="previous">Previous question</button>
        <button className="next">Next question</button>
      </div>
    </section>
  );
}
