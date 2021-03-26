import React from "react";

import { ReactComponent as Map } from "svg/usMapWithLabels.svg";

import css from "./UsaMap.module.scss";
import { UsaMapProps } from "./UsaMap.type";

const UsaMap = ({ innerRef, svgRef }: UsaMapProps) => (
  <div className={css.UsaMap} ref={innerRef}>
    <Map ref={svgRef} />
  </div>
);

export { UsaMap };

export default React.memo(UsaMap);
