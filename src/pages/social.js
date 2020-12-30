import React from "react";
import Navbar from "../components/navbar";
import Chat from "../components/chat";
import Input from "../components/input";

export default function Social() {
  return (
    <div>
      <Navbar />
      <Chat />
      <div className="flex justify-center">
        <Input
          placeholder="Busca un amigo o una asignatura..."
          className="mt-10"
          variant="half"
        />
      </div>
    </div>
  );
}
