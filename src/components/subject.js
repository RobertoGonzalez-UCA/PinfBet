import React from "react";

const variants = {
  red: "bg-red-100 text-red-500 ml-4 mr-4 px-5 py-5 rounded-xl text-center",
  yellow:
    "bg-yellow-100 text-yellow-500 ml-4 mr-4 px-5 py-5 rounded-xl text-center",
  blue: "bg-blue-100 text-blue-500 ml-4 mr-4 px-5 py-5 rounded-xl text-center",
  green:
    "bg-green-100 text-green-500 ml-4 mr-4 px-5 py-5 rounded-xl text-center",
  purple:
    "bg-purple-100 text-purple-500 ml-4 mr-4 px-5 py-5 rounded-xl text-center"
};

export default function Subject({
  variant = "red",
  subjectName,
  subjectFullname,
  friends
}) {
  return (
    <button className={[variants[variant]].join(" ")}>
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
