import React from "react";

function Question({ currentQuestion, questions, handleAnswerOptionClick }) {
  return (
    <div>
      <div className="question-section">
        <div className="question-count">
          <span>Питання {currentQuestion + 1}</span> / {questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answers.map((answerOption, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
          >
            {answerOption.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
