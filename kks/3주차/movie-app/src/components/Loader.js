import React from "react";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 26, fontWeight: "lighter" }}>{text}</span>
    </div>
  );
};

export default Loader;
