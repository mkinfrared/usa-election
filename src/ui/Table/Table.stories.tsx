import { Meta, Story } from "@storybook/react/types-6-0";

import UsStates from "utils/usStates";

import { Table } from "./Table";
import { TableProps } from "./Table.type";

type State = typeof UsStates[number];

export default {
  title: "UI/Table",
  component: Table
} as Meta;

const Template: Story<TableProps<State>> = (args) => <Table {...args} />;
const Default = Template.bind({});

Default.args = {
  data: UsStates,
  headers: {
    name: "State",
    abbreviation: "Abbreviation",
    votes: "Electoral Votes"
  }
};

export { Default };
