import React from "react";
import { action } from "@storybook/addon-actions";

import Panel from "../components/Panel";

export default {
  title: "Panel",
  component: Panel,
};

export const Text = () => (
  <Panel>Hello panel</Panel>
);

