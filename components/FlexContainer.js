import React from "react";

const FlexContainer = ({
  flexDirection,
  justifyContent,
  alignItems,
  children
}) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width:
          flexDirection === "row" || flexDirection === "row-reverse"
            ? 700
            : 200,
        height:
          flexDirection === "column" || flexDirection === "column-reverse"
            ? 700
            : 200,
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
