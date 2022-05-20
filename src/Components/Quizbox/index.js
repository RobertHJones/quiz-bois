import React from "react";
import "./index.css";

export default function Quizbox() {
  return (
    <section className="quiz">
      <div className="question-container">
        <h2>Question</h2>
      </div>
      <div className="answers-container">
        <button className="answer-a">Answer A</button>
        <button className="answer-b">Answer B </button>
        <button className="answer-c">Answer C</button>
        <button className="answer-d">Answer D</button>
      </div>
      <div className="scrolling">
        <button className="previous">Previous question</button>
        <button className="next">Next question</button>
      </div>
    </section>
  );
}
