import { combineReducers } from "redux";

import candidates from "./candidates/reducer";
import votes from "./votes/reducer";

const reducers = combineReducers({
  votes,
  candidates
});

export default reducers;
