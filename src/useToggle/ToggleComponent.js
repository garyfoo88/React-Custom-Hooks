import React from "react";
import useToggle from "./useToggle";

function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Toggle True</button>
      <button onClick={() => toggleValue(false)}>Toggle False</button>
    </div>
  );
}

export default ToggleComponent;
