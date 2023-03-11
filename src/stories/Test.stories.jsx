import React from "react";
import { storiesOf } from "@storybook/react";

import { Test } from "../components/Test";
import { Block } from "../components/Block/Block";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return (
    <h1>
      <Block />
      <Test />
    </h1>
  );
});
