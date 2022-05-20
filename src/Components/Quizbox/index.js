import React from "react";
import "./index.css";

export default function Quizbox({ data }) {
  return (
    <section className="quiz">
      <div className="question-container">
        <h2>{data.results[0].question}</h2>
      </div>
      <div className="answers-container">
        {/* <button className="answer-a">{data[0].answers.answer_a}</button>
        <button className="answer-b">{data[0].answers.answer_b}</button>
        <button className="answer-c">{data[0].answers.answer_c}</button>
        <button className="answer-d">{data[0].answers.answer_d}</button> */}
      </div>
      <div className="scrolling">
        <button className="previous">Previous question</button>
        <button className="next">Next question</button>
      </div>
    </section>
  );
}
