import React from "react";
import { action } from "@storybook/addon-actions";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs]
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Disabled = () => (
  <Button disabled={boolean("Disabled", false)} onClick={action("clicked")}>
    Hello Button
  </Button>
);
