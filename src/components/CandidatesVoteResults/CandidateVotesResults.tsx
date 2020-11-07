import React from "react";

import Avatar from "ui/Avatar";
import PointsMark from "ui/PointsMark";
import ProgressBar from "ui/ProgressBar";
import classNames from "utils/classNames";

import css from "./CandidateVotesResults.module.scss";
import { CandidateVotesResultsProps } from "./CandidateVotesResults.type";

const CandidateVotesResults = ({
  candidates,
  votesToWin,
  electoralResults,
  winner
}: CandidateVotesResultsProps) => {
  const candidatesAvatars = candidates
    .sort(({ party }) => (party === "democrat" ? 1 : -1))
    .map(({ party, imageSrc, name }) => {
      const className = party === "republican" ? css.republican : css.democrat;

      return (
        <div key={name} className={css.avatar}>
          <Avatar name={name} url={imageSrc} className={className} />
          <p className={className}>{name}</p>
        </div>
      );
    });

  const candidateProgress = electoralResults
    .sort(({ party }) => (party === "democrat" ? 1 : -1))
    .map(({ electoralVotes, party }, index) => {
      const className = party === "republican" ? css.republican : css.democrat;
      const flip = index / 2 !== 0;
      const percent = (electoralVotes * 100) / votesToWin;

      return (
        <ProgressBar
          key={party}
          className={className}
          flip={flip}
          percent={percent}
          value={electoralVotes}
          showValue
        />
      );
    });

  let winnerClassName = "";

  if (winner?.party === "democrat") {
    winnerClassName = css.democrat;
  }

  if (winner?.party === "republican") {
    winnerClassName = css.republican;
  }

  return (
    <div className={css.CandidateVotesResults}>
      <div className={css.avatars}>{candidatesAvatars}</div>
      <div className={css.progress}>
        {candidateProgress}
        <PointsMark
          className={classNames(css.winMark, winnerClassName)}
          value={votesToWin}
        />
      </div>
    </div>
  );
};

export { CandidateVotesResults };

export default React.memo(CandidateVotesResults);
