import { useState } from "react";
//this is a custom hook that returns object, using object must be the same as the names you declared
export const useToggle2 = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle2 = () => {
    setState((prev) => !prev);
  };
  return { state, toggle2 };
};
