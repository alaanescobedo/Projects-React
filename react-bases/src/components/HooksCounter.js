import React, { useState } from "react";

export default function HooksCounter() {
  const [count, setCount] = useState(0);
  // console.log(useState());

  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  return (
    <>
      <h2>Hooks - Use state</h2>
      <nav>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
      </nav>
      <h3>{count}</h3>
    </>
  );
}
