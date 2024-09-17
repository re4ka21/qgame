import React, { useCallback, useEffect, useState } from "react";
import NameForm from "./NameForm";
import Question from "./Question";
import Score from "../score";

const questions = [
  {
    question: "15 x 15 = ?",
    answers: [
      { text: "125", isCorrect: false },
      { text: "250", isCorrect: false },
      { text: "225", isCorrect: true },
      { text: "265", isCorrect: false },
    ],
  },

  {
    question: "96 + 58 = ?",
    answers: [
      { text: "152", isCorrect: false },
      { text: "153", isCorrect: false },
      { text: "155", isCorrect: false },
      { text: "154", isCorrect: true },
    ],
  },
  {
    question: "96 / 4 = ?",
    answers: [
      { text: "24", isCorrect: true },
      { text: "23", isCorrect: false },
      { text: "22", isCorrect: false },
      { text: "20", isCorrect: false },
    ],
  },
  {
    question: "63 x 5 = ?",
    answers: [
      { text: "330", isCorrect: false },
      { text: "315", isCorrect: true },
      { text: "312", isCorrect: false },
      { text: "310", isCorrect: false },
    ],
  },
  {
    question: "3x + 7 = 16; x = ?",
    answers: [
      { text: "2,5", isCorrect: false },
      { text: "3", isCorrect: true },
      { text: "4", isCorrect: false },
      { text: "52", isCorrect: false },
    ],
  },
  {
    question: "y = x + 52; y = ?; x = 25",
    answers: [
      { text: "67", isCorrect: false },
      { text: "78", isCorrect: false },
      { text: "87", isCorrect: false },
      { text: "77", isCorrect: true },
    ],
  },
  {
    question: "√169 = ?",
    answers: [
      { text: "13", isCorrect: true },
      { text: "14", isCorrect: false },
      { text: "12", isCorrect: false },
      { text: "√12", isCorrect: false },
    ],
  },
  {
    question: "458% = ?",
    answers: [
      { text: "4.58", isCorrect: true },
      { text: "45.8", isCorrect: false },
      { text: "0.458", isCorrect: false },
      { text: "52", isCorrect: false },
    ],
  },
  {
    question: "5! = ?",
    answers: [
      { text: "150", isCorrect: false },
      { text: "225", isCorrect: false },
      { text: "120", isCorrect: true },
      { text: "25", isCorrect: false },
    ],
  },
  {
    question: "sin 30 = ?",
    answers: [
      { text: "1/√3", isCorrect: false },
      { text: "√3/2", isCorrect: false },
      { text: "0,5", isCorrect: true },
      { text: "3", isCorrect: false },
    ],
  },
  {
    question: "tg 60 = ?",
    answers: [
      { text: "√3", isCorrect: true },
      { text: "1/2", isCorrect: false },
      { text: "√3/2", isCorrect: false },
      { text: "0,25", isCorrect: false },
    ],
  },
  {
    question: "cos 60 = ?",
    answers: [
      { text: "0,25", isCorrect: false },
      { text: "1/2", isCorrect: true },
      { text: "√3/2", isCorrect: false },
      { text: "1/√3", isCorrect: false },
    ],
  },
];

function Quiz() {
  useEffect(() => {
    const a = function (max, min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    console.log(a(13, 5));
  }, []);

  const [name, setName] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsNameSubmitted(true);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsNameSubmitted(false);
    setName("");
  };

  return (
    <div className="quiz-container">
      {!isNameSubmitted ? (
        <NameForm
          name={name}
          setName={setName}
          handleNameSubmit={handleNameSubmit}
        />
      ) : showScore ? (
        <Score
          name={name}
          score={score}
          questions={questions}
          handleRestart={handleRestart}
        />
      ) : (
        <Question
          currentQuestion={currentQuestion}
          questions={questions}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}

export default Quiz;
