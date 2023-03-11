import React from "react";
import { Block } from "../Block/Block";

export const Grid = ({
  rows = 3,
  cols = 3,
  width = "100%",
  height = "100%",
}) => {
  const items = [];

  for (let i = 0; i < cols * rows; i++) {
    items.push(<Block key={`grid ${cols}x${rows}-${i}`} rows={rows} />);
  }

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    height: "100%",
    width: "100%",
  };

  const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: `${height}`,
    width: `${width}`,
  };

  return (
    <div style={containerStyles}>
      <div style={gridStyles}>{items}</div>
    </div>
  );
};
