import React, { useRef, useMemo } from "react";
import Toggle from "./Toggle";
import { useTitleInput } from "./hooks/useTitleInput";

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  const reverseWord = word => {
    console.log('function called');
    return word.split("").reverse().join("");
  };
  const title = "Level Up Dishes";

  const TitleReversed = useMemo(() => reverseWord((name), [name]));

  return (
    // attach the ref to a DOM element
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add("new-fake-class")}>
        {TitleReversed}
      </h1>
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
          placeholder="Type something here"
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
