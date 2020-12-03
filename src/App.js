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
  crearApuesta,
  registrarUsuario
} from "./db.js";

initFirebase();

export default function App() {
  return (
    <div>
      <nav class="bg-gray-600 relative flex items-center justify-between h-15">
        <div class="ml-4">
          <img
            src="https://i.imgur.com/22YMzOo.png"
            alt="Logo PinfBet"
            width="200"
          ></img>
        </div>
        <div class="relative flex items-center justify-between h-15 mr-4">
          <Button variant="seleccion">Apuestas</Button>
          <Button variant="seleccion">Social</Button>
          <Button variant="seleccion">Rankings</Button>
          <img
            src="https://i.imgur.com/PIRlphI.png"
            alt="Menu Perfil"
            width="40"
          ></img>
        </div>
      </nav>
      <h1 className="text-2xl text-gray-900 font-semibold">
        Hello PinfBetero!
      </h1>
      <p>Esto es un párrafo.</p>
      <Button onClick={createUser}>Crear Usuario</Button>
      <Button variant="primary" onClick={getUsers}>
        Mostrar Usuarios
      </Button>
      <Button variant="seleccion" onClick={crearApuesta}>
        Crear Apuesta
      </Button>
      <Button onClick={solicitarAmistad}>Solicitar Amistad</Button>
      <Button onClick={aceptarSolicitud}>Aceptar Solicitud</Button>
      <Button onClick={rechazarSolicitud}>Rechazar Solicitud</Button>
    </div>
  );
}
