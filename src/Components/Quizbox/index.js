import React from "react";
import "./index.css";

export default function Quizbox({ data }) {
  return (
    <section className="quiz">
      <div className="question-container">
        <h2>{data.question}</h2>
      </div>
      <div className="answers-container">
        <button className="answer-a">{data.answers.answer_a}</button>
        <button className="answer-b">{data.answers.answer_b}</button>
        <button className="answer-c">{data.answers.answer_c}</button>
        <button className="answer-d">{data.answers.answer_d}</button>
      </div>
      <div className="scrolling">
        <button className="previous">Previous question</button>
        <button className="next">Next question</button>
      </div>
    </section>
  );
}
