import React from "react";
import { Block } from "../Block/Block";

interface Grid {
  rows: number,
  cols: number,
  width: number,
  height: number,
}

export const Grid = ({
  rows = 3,
  cols = 3,
  width = 100,
  height = 100,
}) => {
  const items = [];

  for (let i = 0; i < cols * rows; i++) {
    items.push(
    <Block
    key={`grid ${cols}x${rows}-${i}`}
     rows={rows} />
    );
  }

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    height: `${height}%`,
    width: `${width}%`,
  };

  const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  };

  return (
    <div style={containerStyles}>
      <div style={gridStyles}>{items}</div>
    </div>
  );
};
