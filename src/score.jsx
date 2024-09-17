import React from "react";

function Score({ name, score, questions, handleRestart }) {
  return (
    <div className="score-section">
      {score < 6 ? (
        <p>
          {name}, ви відповіли правильно на {score} з {questions.length} питань.
          Ви можете краще, спробуйте ще раз!
        </p>
      ) : (
        <p>
          {name}, чудова робота! Ви відповіли правильно на {score} з{" "}
          {questions.length} питань!
        </p>
      )}
      <button onClick={handleRestart}>Почати знову</button>
    </div>
  );
}

export default Score;
