import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { UsaMap } from "./UsaMap";
import { UsaMapProps } from "./UsaMap.type";

export default {
  title: "UI/UsaMap",
  component: UsaMap
} as Meta;

const Template: Story<UsaMapProps> = (args) => <UsaMap {...args} />;
const Default = Template.bind({});

export { Default };
