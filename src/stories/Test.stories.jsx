import React from "react";
import { storiesOf } from "@storybook/react";

import { Test } from "../components/Test";
import { Block } from "../components/Block/Block";
import { Grid } from "../components/Grid/Grid";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return (
    <h1>
      {/* <Block />
      <Test /> */}
      <Grid rows={10} cols={10} />
    </h1>
  );
});
