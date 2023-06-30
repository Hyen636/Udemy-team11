import React, { useState } from "react";

function useCounter(initialCount) {
  // 1씩 증가하는 함수
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };
  return { count, increment };
}

export default useCounter;
