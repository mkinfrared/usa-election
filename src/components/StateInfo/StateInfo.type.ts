import { selectCandidates } from "store/reducers/candidates/selectors";
import { State } from "store/reducers/votes/types";

export interface StateInfoProps {
  stateId: string;
  state: State;
  candidates: ReturnType<typeof selectCandidates>;
}
