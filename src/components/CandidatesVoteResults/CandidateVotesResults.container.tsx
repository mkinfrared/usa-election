import React from "react";
import { useSelector } from "react-redux";

import {
  selectCandidates,
  selectCandidatesElectoralVotes,
  selectWinner
} from "store/reducers/candidates/selectors";
import { selectMinimumVotesToWin } from "store/reducers/votes/selectors";

import CandidateVotesResultsFC from "./CandidateVotesResults";

const CandidateVotesResultsContainer = () => {
  const candidates = useSelector(selectCandidates);
  const electoralResults = useSelector(selectCandidatesElectoralVotes);
  const votesToWin = useSelector(selectMinimumVotesToWin);
  const winner = useSelector(selectWinner);

  return (
    <CandidateVotesResultsFC
      candidates={candidates}
      electoralResults={electoralResults}
      votesToWin={votesToWin}
      winner={winner}
    />
  );
};

export default React.memo(CandidateVotesResultsContainer);
