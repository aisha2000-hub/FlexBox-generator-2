import React from "react";

const Box = ({ color, size }) => {
  return (
    <div
      style={{
        minHeight: size,
        minWidth: size,
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Box;
