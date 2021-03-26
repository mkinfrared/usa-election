import { memo } from "react";

import Float from "ui/Float";
import Table from "ui/Table";

import css from "./StateInfo.module.scss";
import { StateInfoProps } from "./StateInfo.type";

const StateInfo = ({ state, candidates }: StateInfoProps) => {
  const { democrat, republican, votes } = state;
  const total = democrat + republican;

  const getPercents = (value: number) => {
    const result = (value * 100) / total;

    return result ? result.toFixed(1) : 0;
  };

  const data = candidates.map(({ name, party }) => {
    const value = state[party];

    return {
      candidateName: name,
      candidateVotes: party,
      candidatePercents: getPercents(value)
    };
  });

  return (
    <Float>
      <div className={css.StateInfo}>
        <h4>{state.name}</h4>
        <p>Electoral Votes: {votes}</p>
        <Table
          data={data}
          headers={{
            candidateName: "Candidate",
            candidateVotes: "Votes",
            candidatePercents: "Percents"
          }}
          showOrder={false}
        />
        <p>Total: {total}</p>
      </div>
    </Float>
  );
};

export { StateInfo };

export default memo(StateInfo);
