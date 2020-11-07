import { all, fork } from "redux-saga/effects";

import votesSaga from "./reducers/votes/saga";

function* rootSaga() {
  yield all([fork(votesSaga)]);
}

export default rootSaga;
