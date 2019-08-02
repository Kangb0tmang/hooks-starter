import React, { useState, useEffect } from "react";

//        value, function           default state
// const [name, setName] = useState(initialState);

/* const [name, setName] = useState(""); */

// useEffect runs after every render cycle
// replacing lifecycle methods such as componentDidMount, componentDidUpdate etc
/*
  useEffect(() => {
    document.title = name;
  });
*/

// Custom hook convetion should start with "use"
function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    document.title = value;
  });

  return [value, setValue];
}

export { useTitleInput };
