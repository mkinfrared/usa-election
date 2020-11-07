export enum VotesActionTypes {
  START = "@@votes/START",
  COMPLETE = "@@votes/COMPLETE"
}

export type Vote = {
  stateName: string;
};

export type State = {
  name: string;
  abbreviation: string;
  votes: number;
  totalVote: number;
  democrat: number;
  republican: number;
};
