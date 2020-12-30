import React from "react";

const variants = {
  ordenador:
    "https://images.vexels.com/media/users/3/157318/isolated/preview/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer-by-vexels.png"
};

export default function Grade({
  variant = "ordenador",
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
        <div className="text-xs text-gray-900">
          ({gradeFullname})
        </div>
        <div className="flex justify-center">
          <img
            src={variants[variant]}
            alt="Icono"
            width="40"
          />
        </div>
        <div className="text-sm text-gray-900">
          ({friends} amigos en este
        </div>
        <div className="text-sm text-gray-900">
          grado)
        </div>
      </div>
    </button>
  );
}
