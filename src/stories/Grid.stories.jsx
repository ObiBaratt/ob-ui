import React from "react";
import { storiesOf } from "@storybook/react";

import { Block } from "../components/Block/Block";
import { Grid } from "../components/Grid/Grid";

const stories = storiesOf("Grid", module);

const componentsSim = {
  display: "flex",
  width: "80%",
  justifyContent: "center",
  alignItems: "center",
  border: "4px solid purple",
  margin: "10px",
  padding: "10px",
};

const base = {
  width: "100%",
  height: "100%",
  border: "5px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

stories.add("App", () => {
  return (
    <div style={base}>
      <div style={componentsSim}>
        <Grid rows={3} cols={3} />
      </div>
    </div>
  );
});
