import React from "react";
import initFirebase from "./firebase";
// import "firebase/auth";

import "../css/tailwind.css";
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

      <button onClick={createUser}>Crear Usuario</button>
      <button onClick={getUsers}>Mostrar Usuarios</button>
      <button onClick={crearApuesta}>CrearApuesta</button>
      <button onClick={solicitarAmistad}>Solicitar Amistad</button>
      <button onClick={aceptarSolicitud}>Aceptar Solicitud</button>
      <button onClick={rechazarSolicitud}>Rechazar Solicitud</button>
    </div>
  );
}
