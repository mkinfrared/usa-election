import React from "react";

import classNames from "utils/classNames";

import css from "./FakeButton.module.scss";
import { FakeButtonProps } from "./FakeButton.type";

const FakeButton = ({ children, onClick, className }: FakeButtonProps) => {
  const onKeyPressHandler = (event: any) => {
    onClick && onClick(event);
  };

  return (
    <div
      className={classNames(css.FakeButton, className)}
      onClick={onClick}
      onKeyPress={onKeyPressHandler}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default React.memo(FakeButton);
