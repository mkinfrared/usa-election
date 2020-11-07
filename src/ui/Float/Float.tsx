import React, { useEffect, useRef } from "react";

import css from "./Float.module.scss";
import { FloatProps } from "./Float.type";

const Float = ({ children }: FloatProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const setFloatPosition = (element: HTMLDivElement, event: MouseEvent) => {
    const { x, y } = event;
    const cursorOffset = 15;

    let topOffset = y + cursorOffset;
    let leftOffset = x + cursorOffset;

    if (element.clientHeight + topOffset > window.innerHeight) {
      topOffset = y - cursorOffset - element.clientHeight;
    }

    if (element.clientWidth + leftOffset > window.innerWidth) {
      leftOffset = x - cursorOffset - element.clientWidth;
    }

    element.style.top = `${topOffset}px`;

    element.style.left = `${leftOffset}px`;
  };

  const watchMouse = (event: MouseEvent) => {
    if (!ref.current) {
      return;
    }

    setFloatPosition(ref.current, event);
  };

  useEffect(() => {
    window.addEventListener("mousemove", watchMouse);

    return () => {
      window.removeEventListener("mousemove", watchMouse);
    };
  }, []);

  return (
    <div className={css.Float} ref={ref}>
      {children}
    </div>
  );
};

export { Float };

export default React.memo(Float);
