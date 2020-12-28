import React from "react";
import Navbar from "../components/navbar";
import Chat from "../components/chat";
import Button from "../components/button";
import Subject from "../components/subject";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <Chat />
      <div className="relative">
        <div className="absolute left">
          <img
            src="https://i.imgur.com/q385Ahc.png"
            width="200"
            alt="Foto de perfil"
            className="m-4"
          />
          <h1 className="font-semibold text-xl flex justify-center">
            Username
          </h1>
        </div>
      </div>
      <div className="absolute mt-4 left-60 flex">
        <Button>Añadir amigo</Button>
        <Button>Bloquear</Button>
        <Button>Reportar</Button>
      </div>
      <div className="mt-14 transform scale-90">
      <h2 className="mb-4 block text-2xl font-bold leading-none flex justify-center">
          Asignaturas
        </h2>
        <div className="flex justify-center">
          <Subject variant="yellow" subjectName="MD" subjectFullname="" />
          <Subject variant="red" />
          <Subject variant="blue" />
          <Subject variant="green" />
          <Subject variant="purple" />
        </div>
        <div className="flex justify-center">
          <Subject variant="yellow" subjectName="PCTR" subjectFullname="" />
          <Subject variant="red" />
          <Subject variant="blue" />
          <Subject variant="green" />
          <Subject variant="purple" />
        </div>
</div>
    </div>
  );
}
