import React from "react";

export default function Panel() {
  return (
    <button className="ml-4 mr-4 bg-red-100 px-5 py-5 rounded-xl text-center">
      <div>
        <div className="text-red-500 text-2xl font-semibold">MD</div>
        <div className="text-xs">(Matemática Discreta)</div>
        <br />
        <br />
        <div className="text-sm">(x amigos en esta</div>
        <div className="text-sm"> asignatura)</div>
      </div>
    </button>
  );
}
