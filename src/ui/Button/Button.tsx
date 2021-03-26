import React, { useRef } from "react";

import classNames from "utils/classNames";

import css from "./Button.module.scss";
import { ButtonProps } from "./Button.type";

/**
 * Button component
 * @param className
 * @param children
 * @param onClick
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({ className, children, onClick }: ButtonProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  const animate = (event: React.MouseEvent) => {
    const { current } = ref;

    if (!current) {
      return;
    }

    const diameter = Math.max(current.clientWidth, current.clientHeight);
    const radius = diameter / 2;
    const circle = document.createElement("span");

    circle.classList.add(css.ripple);

    circle.style.width = `${diameter}px`;

    circle.style.height = `${diameter}px`;

    circle.style.left = `${event.clientX - (current.offsetLeft + radius)}px`;

    circle.style.top = `${event.clientY - (current.offsetTop + radius)}px`;

    const ripples = document.getElementsByClassName(css.ripple);

    if (ripples.length) {
      ripples[0].remove();
    }

    current.appendChild(circle);
  };

  const handleClick = (event: React.MouseEvent) => {
    animate(event);

    onClick && onClick(event);
  };

  return (
    <button
      className={classNames(css.Button, className)}
      onClick={handleClick}
      ref={ref}
    >
      {children}
    </button>
  );
};

export { Button };

export default React.memo(Button);
