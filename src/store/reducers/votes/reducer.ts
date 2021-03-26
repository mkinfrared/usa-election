import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import UsStates from "utils/usStates";

import { Vote } from "./types";

const initialState = {
  isRunning: false,
  isDone: false,
  states: UsStates.map((state) => ({
    ...state,
    totalVote: Math.round(state.totalVote / 100),
    democrat: 0,
    republican: 0
  }))
};

const votes = createSlice({
  name: "@@votes",
  initialState,
  reducers: {
    start: (state) => {
      state.isRunning = true;
    },
    complete: (state) => {
      state.isDone = true;

      state.isRunning = false;
    },
    addDemocratVote: (state, action: PayloadAction<Vote>) => {
      const { states } = state;
      const { payload } = action;
      const { stateName } = payload;
      const usState = states.find(({ name }) => name === stateName);

      if (!usState) {
        return;
      }

      usState.democrat += 20;
    },
    addRepublicanVote: (state, action: PayloadAction<Vote>) => {
      const { states } = state;
      const { payload } = action;
      const { stateName } = payload;
      const usState = states.find(({ name }) => name === stateName);

      if (!usState) {
        return;
      }

      usState.republican += 20;
    }
  }
});

const { actions, reducer } = votes;
const { addDemocratVote, addRepublicanVote, start } = actions;

export { addDemocratVote, addRepublicanVote, start };

export default reducer;
