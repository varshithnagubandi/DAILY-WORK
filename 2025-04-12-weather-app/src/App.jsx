import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [formd, setFord] = useState("");
  const inputDate = (e) => {
    setName(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    setFord(name);
  };

  return (
    <div>
      <h1>{formd}</h1>
      <form onSubmit={submitHandle}>
        <input type="text" onChange={inputDate} />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default App;
