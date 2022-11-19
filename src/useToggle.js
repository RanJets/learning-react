import { useState } from "react";
//this is a custom hook that returns array, using array is dynamic because you can rename the name inside the returning array as you want when you calling it
export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};
