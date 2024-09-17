// import React, { useState } from "react";

// const questions = [
//   {
//     question: "15 x 15 = ?",
//     answers: [
//       { text: "125", isCorrect: false },
//       { text: "250", isCorrect: false },
//       { text: "225", isCorrect: true },
//       { text: "265", isCorrect: false },
//     ],
//   },
//   {
//     question: "96 + 58 = ?",
//     answers: [
//       { text: "152", isCorrect: false },
//       { text: "153", isCorrect: false },
//       { text: "155", isCorrect: false },
//       { text: "154", isCorrect: true },
//     ],
//   },
//   {
//     question: "96 / 4 = ?",
//     answers: [
//       { text: "24", isCorrect: true },
//       { text: "23", isCorrect: false },
//       { text: "22", isCorrect: false },
//       { text: "20", isCorrect: false },
//     ],
//   },
//   {
//     question: "63 x 5 = ?",
//     answers: [
//       { text: "330", isCorrect: false },
//       { text: "315", isCorrect: true },
//       { text: "312", isCorrect: false },
//       { text: "310", isCorrect: false },
//     ],
//   },
//   {
//     question: "3x + 7 = 16; x = ?",
//     answers: [
//       { text: "2,5", isCorrect: false },
//       { text: "3", isCorrect: true },
//       { text: "4", isCorrect: false },
//       { text: "52", isCorrect: false },
//     ],
//   },
//   {
//     question: "y = x + 52; y = ?; x = 25",
//     answers: [
//       { text: "67", isCorrect: false },
//       { text: "78", isCorrect: false },
//       { text: "87", isCorrect: false },
//       { text: "77", isCorrect: true },
//     ],
//   },
//   {
//     question: "√169 = ?",
//     answers: [
//       { text: "13", isCorrect: true },
//       { text: "14", isCorrect: false },
//       { text: "12", isCorrect: false },
//       { text: "√12", isCorrect: false },
//     ],
//   },
//   {
//     question: "458% = ?",
//     answers: [
//       { text: "4.58", isCorrect: true },
//       { text: "45.8", isCorrect: false },
//       { text: "0.458", isCorrect: false },
//       { text: "52", isCorrect: false },
//     ],
//   },
//   {
//     question: "5! = ?",
//     answers: [
//       { text: "150", isCorrect: false },
//       { text: "225", isCorrect: false },
//       { text: "120", isCorrect: true },
//       { text: "25", isCorrect: false },
//     ],
//   },
//   {
//     question: "sin 30 = ?",
//     answers: [
//       { text: "1/√3", isCorrect: false },
//       { text: "√3/2", isCorrect: false },
//       { text: "0,5", isCorrect: true },
//       { text: "3", isCorrect: false },
//     ],
//   },
//   {
//     question: "tg 60 = ?",
//     answers: [
//       { text: "√3", isCorrect: true },
//       { text: "1/2", isCorrect: false },
//       { text: "√3/2", isCorrect: false },
//       { text: "0,25", isCorrect: false },
//     ],
//   },
//   {
//     question: "cos 60 = ?",
//     answers: [
//       { text: "0,25", isCorrect: false },
//       { text: "1/2", isCorrect: true },
//       { text: "√3/2", isCorrect: false },
//       { text: "1/√3", isCorrect: false },
//     ],
//   },
// ];

// function Quiz() {
//   const [name, setName] = useState("");
//   const [isNameSubmitted, setIsNameSubmitted] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0); // Счёт
//   const [showScore, setShowScore] = useState(false);

//   const handleNameSubmit = (e) => {
//     e.preventDefault();
//     setIsNameSubmitted(true);
//   };

//   const handleAnswerOptionClick = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       setShowScore(true);
//     }
//   };

//   return (
//     <div className="quiz-container">
//       {!isNameSubmitted ? (
//         <div className="name-form">
//           <h2>Введіть своє ім'я для початку гри:</h2>
//           <form onSubmit={handleNameSubmit}>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Ваше ім'я"
//               required
//             />
//             <button type="submit">Почати гру </button>
//           </form>
//         </div>
//       ) : showScore ? (
//         <div className="score-section">
//           {score < 6 ? (
//             <p>
//               {name}, ви відповіли правильно на {score} з {questions.length}{" "}
//               питань. Ви можете краще, спробуйте ще раз!
//             </p>
//           ) : (
//             <p>
//               {name}, чудова робота! Ви відповіли правильно на {score} з{" "}
//               {questions.length} питань!
//             </p>
//           )}
//         </div>
//       ) : (
//         <>
//           <div className="question-section">
//             <div className="question-count">
//               <span>Питання {currentQuestion + 1}</span> / {questions.length}
//             </div>
//             <div className="question-text">
//               {questions[currentQuestion].question}
//             </div>
//           </div>
//           <div className="answer-section">
//             {questions[currentQuestion].answers.map((answerOption, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
//               >
//                 {answerOption.text}
//               </button>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Quiz;
