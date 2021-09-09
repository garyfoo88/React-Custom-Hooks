import React, { useState } from "react";
import usePrevious from "./usePrevious";

function PreviousComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Kyle");
  const previousCount = usePrevious(count);

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        ++
      </button>
      <button onClick={() => setName("John")}>Change Name</button>
    </div>
  );
}

export default PreviousComponent;
