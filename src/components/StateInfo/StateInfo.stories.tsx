import { Meta, Story } from "@storybook/react/types-6-0";

import douche from "images/Douche.png";
import sandwich from "images/Turd-sandwich.png";

import { StateInfo } from "./StateInfo";
import { StateInfoProps } from "./StateInfo.type";

export default {
  title: "Components/StateInfo",
  component: StateInfo
} as Meta;

const Template: Story<StateInfoProps> = (args) => <StateInfo {...args} />;
const Default = Template.bind({});

Default.args = {
  stateId: "California",
  candidates: [
    {
      name: "Giant Douche",
      imageSrc: douche,
      party: "republican"
    },
    {
      name: "Turd Sandwich",
      imageSrc: sandwich,
      party: "democrat"
    }
  ],
  state: {
    votes: 42,
    republican: 424242,
    democrat: 313131,
    totalVote: 999999,
    name: "Colorado",
    abbreviation: "CO"
  }
};

export { Default };
