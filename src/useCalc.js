import { useState } from "react";

export const useCalc = (initialVal = 0) => {
  const [count, setCount] = useState(initialVal);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return [count, increase, decrease, resetCount];
};
