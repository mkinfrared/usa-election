import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { ProgressBar } from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.type";

export default {
  title: "UI/ProgressBar",
  component: ProgressBar
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;
const Default = Template.bind({});

Default.args = {
  value: 50,
  showValue: true,
  percent: 33
};

const Template2: Story<ProgressBarProps> = (args) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <ProgressBar value={args.value} percent={args.percent} />
    <ProgressBar {...args} />
  </div>
);

const DoubleProgress = Template2.bind({});

DoubleProgress.args = {
  value: 33,
  flip: true,
  percent: 77
};

export { Default, DoubleProgress };
