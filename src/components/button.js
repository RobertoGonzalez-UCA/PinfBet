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
    "transition duration-250 m-1 px-4 py-3 leading-none font-semibold rounded-lg bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:bg-green-600",
  primary:
    "transition duration-250 ml-1 px-4 py-3 leading-none font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100",
  seleccion:
    "transition duration-250 ml-1 px-7 py-5 leading-none font-semibold bg-gray-600 text-white hover:text-green-400 focus:outline-none"
};

export default function Button({ variant = "default", className, ...rest }) {
  return (
    <button className={[variants[variant], className].join(" ")} {...rest} />
  );
}
