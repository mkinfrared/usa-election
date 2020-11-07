import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { PointsMark } from "./PointsMark";
import { PointsMarkProps } from "./PointsMark.type";

export default {
  title: "UI/PointsMark",
  component: PointsMark
} as Meta;

const Template: Story<PointsMarkProps> = (args) => <PointsMark {...args} />;
const Default = Template.bind({});

Default.args = {
  value: 279
};

export { Default };
