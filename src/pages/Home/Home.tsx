import React from "react";
import { useDispatch } from "react-redux";

import CandidateVotesResults from "components/CandidatesVoteResults";
import VoteResultsMap from "components/VoteResultsMap";
import { startElection } from "store/reducers/votes/actions";
import Button from "ui/Button";

import css from "./Home.module.scss";

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startElection());
  };

  return (
    <div className={css.Home}>
      <Button onClick={handleClick}>Start</Button>
      <CandidateVotesResults />
      <VoteResultsMap />
    </div>
  );
};

export { Home };

export default React.memo(Home);
