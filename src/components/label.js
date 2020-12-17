import React from "react";

export default function Label({ className, text, ...rest }) {
  return (
    <label
      className={[className, "pr-2 text-lg font-semibold"].join(" ")}
      {...rest}
    >
      {text}
    </label>
  );
}
