import React from "react";

export default function Select({
  className,
  ...rest
}) {
  return (
    <select
      className={[
        className,
        "border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
      ].join(" ")}
      {...rest}
    ></select>
  );
}
