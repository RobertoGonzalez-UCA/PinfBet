import React from "react";

export default function Label({
  children,
  className,
  ...rest
}) {
  return (
    <label
      className={[
        className,
        "leading-7 text-sm text-gray-600"
      ].join(" ")}
      {...rest}
    >
      {children}
    </label>
  );
}
