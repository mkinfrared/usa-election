import {
  selectCandidates,
  selectCandidatesElectoralVotes,
  selectWinner
} from "store/reducers/candidates/selectors";
import { selectMinimumVotesToWin } from "store/reducers/votes/selectors";

export type CandidateVotesResultsProps = {
  candidates: ReturnType<typeof selectCandidates>;
  votesToWin: ReturnType<typeof selectMinimumVotesToWin>;
  electoralResults: ReturnType<typeof selectCandidatesElectoralVotes>;
  winner: ReturnType<typeof selectWinner>;
};
