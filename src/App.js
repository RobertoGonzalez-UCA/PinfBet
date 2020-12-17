import React from "react";
import initFirebase from "./firebase";
import Button from "./components/button";
import Navbar from "./components/navbar";
import Modal from "./components/modal";
import Alert from "./components/alert";
import Dropdown from "./components/dropdown";
import DropdownProfile from "./components/dropdownProfile";
import Input from "./components/input";
import Select from "./components/select";

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
  mostrarAsignaturasYear,
  cerrarSesion,
  cursarAsignatura,
  actualizarNota
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
          <Select>
            <option value="AA">AA</option>
            <option value="BB">BB</option>
            <option value="CC">CC</option>
          </Select>
        </div>
      </div>

      <h1 className="mt-10 ml-6 mb-4 block text-3xl font-bold leading-none">
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
      <Button onClick={cerrarSesion}>Cerrar Sesión</Button>
      <Button onClick={cursarAsignatura}>Cursar Asignatura</Button>
      <Button onClick={actualizarNota}>Actualizar Nota</Button>

      <h1 className="mt-10 ml-6 mb-4 block text-3xl font-bold leading-none">
        Inputs de prueba
      </h1>

      <form>
        <Input id="email" type="email" placeholder="Introduce el email"></Input>
        <Input
          id="password"
          type="password"
          placeholder="Introduce la contraseña"
        ></Input>
        <Input
          id="year"
          type="number"
          min="1"
          max="4"
          placeholder="Introduce el año"
        ></Input>
        <Input
          id="uidReceptor"
          type="text"
          placeholder="Introduce el uid para solicitar amistad"
        ></Input>
        <Input
          id="uidApostado"
          type="text"
          placeholder="UID del apostado"
        ></Input>
        <Input
          id="apuestaNota"
          type="checkbox"
          placeholder="Apuestas pa nota?"
        ></Input>
        <Input
          id="notaApostada"
          type="number"
          min="0"
          max="10"
          placeholder="Introduce el año"
        ></Input>
        <Input
          id="idAsignatura"
          type="text"
          placeholder="Id asignatura apostada"
        ></Input>
        <Input
          id="cantidadDinero"
          type="text"
          placeholder="Cantidad dinero"
        ></Input>
        <Input
          id="cantidadDineroNota"
          type="number"
          placeholder="Cantidad dinero para Bet Nota"
        ></Input>
        <Input id="degreeId" type="text" placeholder="Id del degree"></Input>
        <Input id="subjectId" type="text" placeholder="Id del subject"></Input>
        <Input
          id="nota"
          type="number"
          placeholder="Nota de la asignatura"
        ></Input>
      </form>
    </div>
  );
}
