import React from "react";

export default function Label({
  className,
  text,
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
      {text}
    </label>
  );
}
