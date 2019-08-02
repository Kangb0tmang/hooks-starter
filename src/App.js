import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";

const App = () => {
  //        value, function           default state
  // const [name, setName] = useState(initialState);
  const [name, setName] = useState("");
  // useEffect runs after every render cycle
  // replacing lifecycle methods such as componentDidMount, componentDidUpdate etc
  useEffect(() => {
    document.title = name;
  });

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form
        onSubmit={e => {
          e.preventDefault();
          formSubmit(name, setName);
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Enter something here"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log(`email sent to ${value}!`);
  setValue("");
};

export default App;
