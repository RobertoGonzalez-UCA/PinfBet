import React from "react";

const variants = {
  default:
    "block border border-gray-300 rounded bg-white px-3 py-2 leading-tight focus:outline-none focus:border-gray-600",
  little:
    "block w-20 border border-gray-300 rounded bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white",
  chat: "block px-3 leading-tight focus:outline-none",
  long:
    "block border border-gray-300 bg-white px-3 py-2 w-full leading-tight focus:outline-none focus:border-gray-600",
  half:
    "block border border-gray-300 rounded bg-white px-3 py-2 w-1/2 leading-tight focus:outline-none focus:border-gray-600"
};

export default function Input({
  variant = "default",
  className,
  placeholder,
  ...rest
}) {
  return (
    <input
      className={[variants[variant], className].join(" ")}
      placeholder={placeholder}
      {...rest}
    />
  );
}
