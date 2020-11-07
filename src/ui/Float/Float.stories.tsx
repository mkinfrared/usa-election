import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { Float } from "./Float";
import { FloatProps } from "./Float.type";

export default {
  title: "UI/Float",
  component: Float
} as Meta;

const Template: Story<FloatProps> = (args) => <Float {...args} />;
const Default = Template.bind({});

Default.args = {
  children: <p>Marklar</p>
};

export { Default };
