import React from "react";

function NameForm({ name, setName, handleNameSubmit }) {
  return (
    <div className="name-form">
      <h2>Введіть своє ім'я для початку гри:</h2>
      <form onSubmit={handleNameSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше ім'я"
          required
        />
        <button type="submit">Почати гру</button>
      </form>
    </div>
  );
}

export default NameForm;
