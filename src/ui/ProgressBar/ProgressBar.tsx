import React, { useLayoutEffect, useRef } from "react";

import classNames from "utils/classNames";

import css from "./ProgressBar.module.scss";
import { ProgressBarProps } from "./ProgressBar.type";

const ProgressBar = ({
  className,
  flip = false,
  showValue = false,
  value = 0,
  percent = 0
}: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const { current } = ref;

    if (current) {
      current.style.width = `${percent}%`;
    }
  }, [percent]);

  return (
    <div className={classNames(css.ProgressBar, flip && css.flip, className)}>
      <div className={css.progress} ref={ref}>
        {showValue && <p>{value}</p>}
      </div>
    </div>
  );
};

export { ProgressBar };

export default React.memo(ProgressBar);
