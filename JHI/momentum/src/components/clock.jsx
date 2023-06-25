import React, { useEffect, useState } from "react";

function SetClock() {
  const date = new Date();
  const [time, setTime] = useState("");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <section class="clock">
      <h1>{time}</h1>
    </section>
  );
}

function Clock() {
  return <SetClock />;
}

export default Clock;
