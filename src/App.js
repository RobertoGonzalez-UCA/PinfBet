import React from "react";
import initFirebase from "./firebase";
import Button from "./components/button";
import Navbar from "./components/navbar";
import Modal from "./components/modal";
import Alert from "./components/alert";
import Dropdown from "./components/dropdown";
import DropdownProfile from "./components/dropdownProfile";

// import "firebase/auth";

import {
  createUser,
  getUsers,
  solicitarAmistad,
  aceptarSolicitud,
  rechazarSolicitud,
  crearApuesta,
  registrarUsuario,
  iniciarSesion,
  mostrarAsignaturasYear
} from "./db.js";

initFirebase();

export default function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Alert />
      <div class="relative flex items-center justify-between h-15">
        <div class="relative flex items-center justify-between h-15">
          <Modal />
          <Dropdown />
          <DropdownProfile />
        </div>
      </div>
      <br />

      <h1 className="ml-3 mb-4 block text-3xl font-bold leading-none">
        Botones de prueba
      </h1>
      <Button onClick={createUser}>Crear Usuario</Button>
      <Button onClick={getUsers}>Mostrar Usuarios</Button>
      <Button onClick={mostrarAsignaturasYear}>
        Mostrar asignaturas por año
      </Button>
      <Button onClick={crearApuesta}>Crear Apuesta</Button>
      <Button onClick={solicitarAmistad}>Solicitar Amistad</Button>
      <Button onClick={aceptarSolicitud}>Aceptar Solicitud</Button>
      <Button onClick={rechazarSolicitud}>Rechazar Solicitud</Button>
      <Button onClick={registrarUsuario}>Registrar Usuario</Button>
      <Button onClick={iniciarSesion}>Iniciar Sesión</Button>
      <form>
        <input id="email" type="email" placeholder="Introduce la email"></input>
        <input
          id="password"
          type="password"
          placeholder="Introduce la contraseña"
        ></input>
        <input
          id="year"
          type="number"
          min="1"
          max="4"
          placeholder="Introduce el año"
        ></input>
      </form>
    </div>
  );
}
