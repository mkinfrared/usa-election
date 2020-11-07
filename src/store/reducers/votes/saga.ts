import {
  all,
  delay,
  fork,
  put,
  select,
  spawn,
  takeLatest
} from "redux-saga/effects";

import { addDemocratVote, addRepublicanVote, start } from "./reducer";
import { getVotesStates, selectState } from "./selectors";
import { State, VotesActionTypes } from "./types";

function* getVoteSaga(stateId: string) {
  while (true) {
    const state: State = yield select(selectState(stateId));
    const { name, democrat, republican, totalVote } = state;

    if (democrat + republican >= totalVote) {
      return;
    }

    const isDemocrat = Math.random() > 0.5;

    if (isDemocrat) {
      yield put(addDemocratVote({ stateName: state.name }));
    } else {
      yield put(addRepublicanVote({ stateName: name }));
    }

    yield delay(10);
  }
}

function* startVotesSaga() {
  yield put(start());

  const states: State[] = yield select(getVotesStates);

  for (let i = 0; i < states.length; i++) {
    const state = states[i];

    yield spawn(getVoteSaga, state.abbreviation);

    if ((i + 1) % 5 === 0) {
      yield delay(60 * 1000);
    }
  }
}

function* watchStartSaga() {
  yield takeLatest(VotesActionTypes.START, startVotesSaga);
}

function* votesSaga() {
  yield all([fork(watchStartSaga)]);
}

export default votesSaga;
