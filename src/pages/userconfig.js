import React from "react";
import Navbar from "../components/navbar";
import Chat from "../components/chat";

export default function Userconfig() {
  return (
    <div>
      <Navbar />
      <Chat />
      <h1 className="mt-10 ml-6 mb-4 block text-3xl font-bold leading-none">
        Estás en la USERCONFIG page.
      </h1>
    </div>
  );
}
