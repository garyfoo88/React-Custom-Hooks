import React, { useState } from "react";
import useTimeout from "./useTimeout";

function TimeoutComponent() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(500), 1000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>++</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
}

export default TimeoutComponent;
