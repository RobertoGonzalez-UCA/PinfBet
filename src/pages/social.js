import React from "react";
import Navbar from "../components/navbar";
import Chat from "../components/chat";

export default function Social() {
  return (
    <div>
      <Navbar />
      <Chat />
      <h1 className="mt-10 ml-6 mb-4 block text-3xl font-bold leading-none">
        Estás en la SOCIAL page.
      </h1>
    </div>
  );
}
