import { Meta, Story } from "@storybook/react/types-6-0";

import cartman from "images/Eric-cartman.png";
import broflovski from "images/Kyle-broflovski.png";

import { CandidateVotesResults } from "./CandidateVotesResults";
import { CandidateVotesResultsProps } from "./CandidateVotesResults.type";

export default {
  title: "Components/CandidateVotesResults",
  component: CandidateVotesResults
} as Meta;

const Template: Story<CandidateVotesResultsProps> = (args) => (
  <CandidateVotesResults {...args} />
);

const Default = Template.bind({});

Default.args = {
  votesToWin: 270,
  electoralResults: [
    { electoralVotes: 14, party: "democrat" },
    { electoralVotes: 27, party: "republican" }
  ],
  candidates: [
    { name: "Eric Cartman", party: "republican", imageSrc: cartman },
    { name: "Kyle Broflovski", party: "democrat", imageSrc: broflovski }
  ],
  winner: {
    party: "republican",
    imageSrc: "",
    name: "Eric Cartman"
  }
};

export { Default };
