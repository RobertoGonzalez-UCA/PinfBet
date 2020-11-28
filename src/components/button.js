import React from "react";

/* export default function Buton({ children, className, ...rest }) {
  return (
    <button className={[className, "p-3 bg-gray-100"].join(" ")} {...rest}>
      {children}
    </button>
  );
} */

// ---------------------------------------------------------------------------

const variants = {
  default:
    "m-1 px-4 py-3 leading-none font-semibold rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
  primary:
    "ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900",
};

export default function Button({ variant = "default", ...rest }) {
  return <button {...rest} className={variants[variant]} />;
}
