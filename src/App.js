import React from "react";
import initFirebase from "./firebase";
import Button from "./components/button";
// import "firebase/auth";

import {
  createUser,
  getUsers,
  solicitarAmistad,
  aceptarSolicitud,
  rechazarSolicitud,
  crearApuesta
} from "./db.js";

initFirebase();

export default function App() {
  return (
    <div>
      <h1 className="text-2xl text-gray-900 font-semibold">
        Hello PinfBetero!
      </h1>
      <p>Esto es un párrafo.</p>
      <Button className="bg-green-500 hover:bg-green-600" onClick={createUser}>
        Crear Usuario
      </Button>
      <Button onClick={getUsers}>Mostrar Usuarios</Button>
      <Button onClick={crearApuesta}>Crear Apuesta</Button>
      <Button onClick={solicitarAmistad}>Solicitar Amistad</Button>
      <Button onClick={aceptarSolicitud}>Aceptar Solicitud</Button>
      <Button onClick={rechazarSolicitud}>Rechazar Solicitud</Button>
    </div>
  );
}
