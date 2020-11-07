import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { reduxDecorator } from "utils/storybookDecorators";

import { Home } from "./Home";

export default {
  title: "Pages/Home",
  component: Home,
  decorators: [reduxDecorator]
} as Meta;

const Template: Story = (args) => <Home {...args} />;
const Default = Template.bind({});

export { Default };
