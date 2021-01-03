import React from "react";

export default function Grade({
  icon,
  gradeName,
  gradeFullname,
  friends,
  ...rest
}) {
  return (
    <button
      className="transition duration-250 bg-purple-100 text-purple-500 m-4 px-5 py-4 rounded-xl text-center focus:outline-none hover:bg-purple-200 transform hover:scale-105"
      style={{
        minWidth: "165px",
        maxWidth: "165px",
        maxHeight: "175px"
      }}
      {...rest}
    >
      <div>
        <div className="text-2xl font-semibold">
          {gradeName}
        </div>
        <div className="text-xs text-gray-900 mt-2">
          ({gradeFullname})
        </div>
        <div className="flex justify-center mt-3">
          {icon}
        </div>
      </div>
    </button>
  );
}
