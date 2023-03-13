import React from "react";

interface BlockProps {
  key: string;
  rows: number;
}

export const Block: React.FC<BlockProps> = ({ key, rows }) => {
  const blockStyles = {
    backgroundColor: "lightgray",
    border: "1px solid red",
    padding: "10px",
    margin: "10px",
    minWidth: "300px",
    minHeight: "300px",
    gridRowEnd: `span ${rows}`,
  };

  return <div key={key} style={blockStyles}></div>;
};
