import React from "react";
import { useSelector } from "react-redux";

import { selectCandidates } from "store/reducers/candidates/selectors";
import { selectState } from "store/reducers/votes/selectors";

import StateInfoFC from "./StateInfo";
import { StateInfoProps } from "./StateInfo.type";

const StateInfoContainer = ({ stateId }: Pick<StateInfoProps, "stateId">) => {
  const state = useSelector(selectState(stateId));
  const candidates = useSelector(selectCandidates);

  if (!state) {
    return null;
  }

  return (
    <StateInfoFC state={state} stateId={stateId} candidates={candidates} />
  );
};

export default React.memo(StateInfoContainer);
