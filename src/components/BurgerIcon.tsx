import React, { HTMLAttributes } from "react";

type DivProps = HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  sticked?: boolean;
};

export default function BurgerIcon({ open, sticked = false, ...props }: DivProps) {
  return (
    <div className={`burger-menu ${open ? "open" : ""} ${sticked ? "sticked" : ""}`} {...props}>
      <div className="bar1" key="b1" />
      <div className="bar2" key="b2" />
      <div className="bar3" key="b3" />
    </div>
  );
}