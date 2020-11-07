import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "store/type";

const getVotesStates = (state: AppState) => state.votes.states;
const selectStates = createSelector(getVotesStates, (states) => states);

const selectState = (stateId: string) =>
  createSelector(selectStates, (states) =>
    states.find(({ abbreviation }) => abbreviation === stateId)
  );

const selectTotalElectoralVotes = createSelector(selectStates, (states) =>
  states.reduce((acc, { votes }) => acc + votes, 0)
);

const selectMinimumVotesToWin = createSelector(
  selectTotalElectoralVotes,
  (totalVotes) => {
    if (totalVotes % 2 === 0) {
      return totalVotes / 2 + 1;
    }

    return Math.floor(totalVotes);
  }
);

const selectDoneState = createSelector(selectStates, (states) =>
  states.filter(
    ({ democrat, republican, totalVote }) => democrat + republican >= totalVote
  )
);

export {
  getVotesStates,
  selectState,
  selectStates,
  selectMinimumVotesToWin,
  selectDoneState
};
