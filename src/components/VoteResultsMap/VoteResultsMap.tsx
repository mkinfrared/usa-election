import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import StateInfo from "components/StateInfo";
import { selectStates } from "store/reducers/votes/selectors";
import UsaMap from "ui/UsaMap";

import cacheState from "./cacheStates";
import css from "./VoteResultsMap.module.scss";

const VoteResultsMap = () => {
  const [activeState, setActiveState] = useState<string | null>(null);
  const ref = useRef<SVGSVGElement>(null);
  const states = useSelector(selectStates);

  const onMouseOver = (state: Element) => (event: Event) => {
    if (state === event.currentTarget) {
      setActiveState(state.id);
    }
  };

  const onMouseOut = () => {
    setActiveState(null);
  };

  useEffect(() => {
    const { current } = ref;

    states.forEach(({ abbreviation }) => {
      const state = current?.getElementById(abbreviation);

      state?.addEventListener("mouseover", onMouseOver(state));

      state?.addEventListener("mouseout", onMouseOut);
    });

    return () => {
      states.forEach(({ abbreviation }) => {
        const state = current?.getElementById(abbreviation);

        state?.removeEventListener("mouseover", onMouseOver(state));

        state?.removeEventListener("mouseout", onMouseOut);
      });
    };
  }, []);

  useLayoutEffect(() => {
    const { current } = ref;

    states.forEach(({ abbreviation, democrat, republican, totalVote }) => {
      const state = current?.getElementById(abbreviation);

      if (!state) {
        return;
      }

      cacheState(state, abbreviation, republican, democrat, totalVote);

      // const isDone = republican + democrat >= totalVote;
      //
      // state?.classList.remove(css.leading, css.republican, css.democrat);
      //
      // if (!isDone) {
      //   state?.classList.add(css.leading);
      // }
      //
      // if (democrat > republican) {
      //   state?.classList.add(css.democrat);
      // }
      //
      // if (republican > democrat) {
      //   state?.classList.add(css.republican);
      // }
      //
      // state?.addEventListener("mouseover", onMouseOver(state));
      //
      // state?.addEventListener("mouseout", onMouseOut);
    });

    // return () => {
    //   states.forEach(({ abbreviation }) => {
    //     const state = current?.getElementById(abbreviation);
    //
    //     state?.removeEventListener("mouseover", onMouseOver(state));
    //
    //     state?.removeEventListener("mouseout", onMouseOut);
    //   });
    // };
  }, [states]);

  return (
    <div className={css.VoteResultsMap}>
      <UsaMap svgRef={ref} />
      {activeState && <StateInfo stateId={activeState} />}
    </div>
  );
};

export default React.memo(VoteResultsMap);
