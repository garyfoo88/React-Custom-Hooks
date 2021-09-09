import React from "react";
import useArray from "./useArray";

function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);

  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(9)}>Add 9</button>
      <button onClick={() => update(1, 10)}>Change second element to 10</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter(n => n < 5)}>Keep numbers that are less than 5</button>
      <button onClick={() => set([10, 11, 12, 13])}>Set Array to 10, 11, 12, 13</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default ArrayComponent;
