import { action } from "typesafe-actions";

import { VotesActionTypes } from "./types";

const startElection = () => action(VotesActionTypes.START);

export { startElection };
