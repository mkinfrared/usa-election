import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react/types-6-0";

import { Button } from "./Button";
import { ButtonProps } from "./Button.type";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const Default = Template.bind({});

Default.args = {
  onClick: action("onClick"),
  children: <p>I am a button</p>
};

export { Default };
