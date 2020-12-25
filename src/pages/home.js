import React from "react";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="mt-10 ml-6 mb-4 block text-3xl font-bold leading-none">
        Estás en la HOME page.
      </h1>
    </div>
  );
}
