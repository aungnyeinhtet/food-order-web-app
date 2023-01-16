import clsx from "clsx";
import React from "react";

interface Props extends React.ComponentProps<"div"> {
  children?: React.ReactNode[] | React.ReactNode;
  component?: keyof React.ReactHTML;
  src?: string;
}

const Avatar = React.forwardRef<HTMLElement, Props>(
  ({ children, className, component = "div", ...others }, ref) => {
    const classes = clsx(
      "flex relative w-10 h-10 bg-DARK_BLUE justify-center items-center text-xl rounded-full text-white",
      className
    );

    return React.createElement(
      component,
      {
        ...others,
        ref,
        className: classes,
      },
      children
    );
  }
);

Avatar.displayName = "Avatar";

export default Avatar;
