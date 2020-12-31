import React from "react";
import Navbar from "../components/navbar";
import Chat from "../components/chat";
import Input from "../components/input";
import Footer from "../components/footer";

export default function Social() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Chat />
      <div className="flex justify-center mb-auto">
        <Input
          placeholder="Busca un amigo o una asignatura..."
          className="mt-10"
          variant="half"
        />
      </div>
      <Footer />
    </div>
  );
}
