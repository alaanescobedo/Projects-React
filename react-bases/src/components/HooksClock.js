import React, { useState, useEffect } from "react";

function Clock({ hour }) {
  return (
    <>
      <h3>{hour}</h3>
    </>
  );
}

export default function HooksClock() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (visible) {
      timer = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    }

    return () => {
      console.log("componentWillUnmount");
      clearInterval(timer);
    };
  }, [visible]);

  const runTime = (visible) => setVisible(visible);

  return (
    <>
      <h2>Clock with Hooks</h2>
      {visible && <Clock hour={hour} />}
      <button onClick={() => runTime(true)}>Start</button>
      <button onClick={() => runTime(false)}>Stop</button>
    </>
  );
}
