import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import url from "images/President_Garrison.png";

import { Avatar } from "./Avatar";
import { AvatarProps } from "./Avatar.type";

export default {
  title: "UI/Avatar",
  component: Avatar
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;
const Default = Template.bind({});

Default.args = {
  onClick: action("onClick"),
  url
};

const NoImage = Template.bind({});

NoImage.args = {
  name: "Herbert B Garrison",
  onClick: action("onClick")
};

export { Default, NoImage };
