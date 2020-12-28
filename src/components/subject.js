import React from "react";

const variants = {
  red:
    "transition duration-250 bg-red-100 text-red-500 m-4 px-5 py-5 rounded-xl text-center focus:outline-none hover:bg-red-200 transform hover:scale-105",
  yellow:
    "transition duration-250 bg-yellow-100 text-yellow-500 m-4 px-5 py-5 rounded-xl text-center focus:outline-none hover:bg-yellow-200 transform hover:scale-105",
  blue:
    "transition duration-250 bg-blue-100 text-blue-500 m-4 px-5 py-5 rounded-xl text-center focus:outline-none hover:bg-blue-200 transform hover:scale-105",
  green:
    "transition duration-250 bg-green-100 text-green-500 m-4 px-5 py-5 rounded-xl text-center focus:outline-none hover:bg-green-200 transform hover:scale-105",
  purple:
    "transition duration-250 bg-purple-100 text-purple-500 m-4 px-5 py-5 rounded-xl text-center focus:outline-none hover:bg-purple-200 transform hover:scale-105"
};

export default function Subject({
  variant = "red",
  subjectName,
  subjectFullname,
  friends
}) {
  return (
    <button
      className={[variants[variant]].join(" ")}
      style={{ minWidth: "150px", maxWidth: "150px" }}
    >
      <div>
        <div className="text-2xl font-semibold">{subjectName}</div>
        <div className="text-xs text-gray-900">({subjectFullname})</div>
        <br />
        <br />
        <div className="text-sm text-gray-900">({friends} amigos en esta</div>
        <div className="text-sm text-gray-900">asignatura)</div>
      </div>
    </button>
  );
}
