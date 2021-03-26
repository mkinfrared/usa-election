import { memo } from "react";

import FakeButton from "ui/FakeButton";
import classNames from "utils/classNames";

import css from "./Avatar.module.scss";
import { AvatarProps } from "./Avatar.type";

const Avatar = ({ name, onClick, url, className }: AvatarProps) => {
  const image = <img src={url} alt={name} />;

  const initials = name
    ?.split(" ")
    .map((substring) => substring[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <FakeButton className={classNames(css.Avatar, className)} onClick={onClick}>
      {url ? image : <p>{initials}</p>}
    </FakeButton>
  );
};

export { Avatar };

export default memo(Avatar);
