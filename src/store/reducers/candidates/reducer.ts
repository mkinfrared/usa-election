import { createSlice } from "@reduxjs/toolkit";

import democrat from "images/Hillary-clinton-s20.png";
import republican from "images/President_Garrison.png";

import { Candidate } from "./types";

const initialState: Candidate[] = [
  {
    name: "Mr. Garrison",
    imageSrc: republican,
    party: "republican"
  },
  {
    name: "Hillary Clinton",
    imageSrc: democrat,
    party: "democrat"
  }
];

const candidates = createSlice({
  name: "@@candidates",
  initialState,
  reducers: {}
});

const { reducer } = candidates;

export default reducer;
