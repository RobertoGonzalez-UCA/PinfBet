import React from "react";

export default function Button({ children, className, ...rest }) {
  return (
    <button className={[className, "p-3 bg-gray-100"].join(" ")} {...rest}>
      {children}
    </button>
  );
}
