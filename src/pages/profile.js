import React from "react";
import Navbar from "../components/navbar";
import Chat from "../components/chat";
import Button from "../components/button";
import Subject from "../components/subject";
import Input from "../components/input";
import Footer from "../components/footer";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <Chat />
      <div className="relative">
        <div className="absolute left-0">
          <img
            src="https://i.imgur.com/q385Ahc.png"
            width="200"
            alt="Foto de perfil"
            className="m-4"
          />
          <h1 className="font-semibold text-2xl flex justify-center">
            Username
          </h1>
          <div
            className="ml-4 mr-4"
            style={{ maxWidth: "225px", maxHeight: "100px" }}
          >
            <div className="text-gray-500 text-md justify-center text-center mb-4">
              Cuéntanos algo sobre ti...
            </div>
          </div>
          <div className="font-semibold text-xl flex justify-center">
            Amigos
          </div>
        </div>
      </div>
      <div className="absolute mt-4 left-60 flex">
        <Button>Añadir amigo</Button>
        <Button variant="secondary">Bloquear</Button>
        <Button className="" variant="tertiary">
          Reportar
        </Button>
      </div>
      <div className="absolute right-36 top-28 ">
        <div className="font-semibold text-2xl mb-4 flex justify-center text-center">
          Estadísticas
        </div>
        <div className="flex justify-between justify-center mb-3">
          <div className=" text-lg flex justify-center text-center mr-20">
            Porcentaje de aciertos
          </div>
          <div className=" text-lg flex justify-center text-center">-%</div>
        </div>
        <div className="flex justify-between justify-center mb-3">
          <div className=" text-lg flex justify-center text-center mr-20">
            PINFCOIN ganados
          </div>
          <div className=" text-lg flex justify-center text-center">-</div>
        </div>
        <div className="flex justify-between justify-center mb-3">
          <div className=" text-lg flex justify-center text-center mr-20">
            Puesto en el ranking
          </div>
          <div className=" text-lg flex justify-center text-center">-</div>
        </div>
        <div className="flex justify-between justify-center mb-3">
          <div className=" text-lg flex justify-center text-center mr-20">
            Tiempo en la plataforma
          </div>
          <div className=" text-lg flex justify-center text-center">-</div>
        </div>
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
        <h2 className="mb-4 block text-2xl font-bold leading-none flex justify-center">
          Comentarios
        </h2>
        <div className="flex justify-center">
          <div
            className="relative border-gray-500 border-2 mb-20 flex justify-center"
            style={{
              minWidth: "1000px",
              maxWidth: "1000px",
              minHeight: "300px"
            }}
          >
            <Input
              variant="long"
              placeholder="Escribe un comentario..."
              className="absolute bottom-0"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
