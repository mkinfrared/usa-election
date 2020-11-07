import { createSelector } from "@reduxjs/toolkit";

import {
  selectDoneState,
  selectMinimumVotesToWin
} from "store/reducers/votes/selectors";
import { AppState } from "store/type";

const getCandidates = (state: AppState) => state.candidates;

const selectCandidates = createSelector(
  getCandidates,
  (candidates) => candidates
);

const selectCandidatesElectoralVotes = createSelector(
  selectCandidates,
  selectDoneState,
  (candidates, states) =>
    candidates.map(({ party }) => {
      const electoralVotes = states.reduce((acc, state) => {
        const { democrat, republican, votes } = state;

        if (party === "democrat" && democrat > republican) {
          return acc + votes;
        }

        if (party === "republican" && republican > democrat) {
          return acc + votes;
        }

        return acc;
      }, 0);

      return { party, electoralVotes };
    })
);

const selectWinner = createSelector(
  selectCandidates,
  selectCandidatesElectoralVotes,
  selectMinimumVotesToWin,
  (candidates, votes, votesToWin) => {
    const winner = votes.find(
      ({ electoralVotes }) => electoralVotes > votesToWin
    );

    if (winner) {
      return candidates.find((candidate) => candidate.party === winner.party);
    }

    return null;
  }
);

export { selectCandidates, selectCandidatesElectoralVotes, selectWinner };
