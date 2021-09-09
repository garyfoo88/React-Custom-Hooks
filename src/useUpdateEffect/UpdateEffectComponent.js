import React, { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

function UpdateEffectComponent() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>++</button>
    </div>
  );
}

export default UpdateEffectComponent;
