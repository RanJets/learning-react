import { useState } from "react";

export const useCalc = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(+1);
  const decrease = () => setCount(-1);
  const resetCount = () => setCount(0);

  return [count, increase, decrease, resetCount];
};
