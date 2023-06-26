import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState();
  const onTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    setTime(
      `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}`
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      onTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h1 style={{ fontSize: 160, fontWeight: "bold" }}>{time}</h1>;
};

export default Clock;
