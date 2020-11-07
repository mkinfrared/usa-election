import isEqual from "lodash/isEqual";

import css from "./VoteResultsMap.module.scss";

type Cache = {
  isDemocrat: boolean;
  isRepublican: boolean;
  isDone: boolean;
};

const cache = {} as Record<string, Cache>;

const cacheState = (
  path: Element,
  abbreviation: string,
  republican: number,
  democrat: number,
  totalVote: number
) => {
  const isDone = republican + democrat >= totalVote;
  const isDemocrat = democrat > republican;
  const isRepublican = republican > democrat;
  const newState = { isDone, isDemocrat, isRepublican };
  const prevState = cache[abbreviation];

  const stylePath = () => {
    if (isDone) {
      path.classList.remove(css.leading);
    } else {
      path.classList.add(css.leading);
    }

    if (!isDemocrat && !isRepublican) {
      path.classList.remove(css.republican);

      path.classList.remove(css.democrat);
    }

    if (isRepublican) {
      path.classList.add(css.republican);
    }

    if (isDemocrat) {
      path.classList.add(css.democrat);
    }
  };

  if (cache[abbreviation]) {
    if (cache[abbreviation].isDone) {
      return;
    }

    if (!isEqual(prevState, newState)) {
      cache[abbreviation] = newState;

      stylePath();
    }
  } else {
    cache[abbreviation] = newState;
  }
};

export default cacheState;
