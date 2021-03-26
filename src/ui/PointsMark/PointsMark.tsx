import React from "react";

import classNames from "utils/classNames";

import css from "./PointsMark.module.scss";
import { PointsMarkProps } from "./PointsMark.type";

const PointsMark = ({ className, value }: PointsMarkProps) => (
  <div className={classNames(css.PointsMark, className)}>
    <p>{value}</p>
  </div>
);

export { PointsMark };

export default React.memo(PointsMark);
