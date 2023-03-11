import React from "react";

export const Block = ({ rows }) => {
  const blockStyles = {
    backgroundColor: 'lightgray',
    border: '1px solid red',
    padding: '10px',
    gridRowEnd: `span ${rows}`,
  };

  return <div style={blockStyles}></div>;
};
