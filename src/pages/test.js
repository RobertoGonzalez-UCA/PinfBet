import React from "react";

import initFirebase from "../firebase";
import Button from "../components/button";
import Navbar from "../components/navbar";
import Modal from "../components/modal";
import Dropdown from "../components/dropdown";
import DropdownProfile from "../components/dropdownProfile";
import Input from "../components/input";
import Select from "../components/select";
import Subject from "../components/subject";
import Table from "../components/table";
import Chat from "../components/chat";
import SearchBar from "../components/searchBar";

// import "firebase/auth";

import {
  getUsers,
  solicitarAmistad,
  mostrarSolicitud,
  aceptarSolicitud,
  rechazarSolicitud,
  iniciarCrearApuesta,
  iniciarSesion,
  mostrarAsignaturasYear,
  cerrarSesion,
  cursarAsignatura,
  actualizarNota,
  createSubject,
  prueba,
  leerExpediente,
  devolverInfoSubject,
  comprobarCreditos,
  debugCambioId
} from "../db.js";

initFirebase();

export default function Test() {
  return (
    <div>
      <Navbar />
      <h1 className="mt-7 ml-6 mb-4 block text-3xl font-bold leading-none">
        Componentes
      </h1>
      <div className="relative flex items-center justify-between h-15">
        <div className="relative flex items-center justify-between h-15">
          <Modal />
          <Dropdown />
          <DropdownProfile />
          <Select>
            <option value="AA">AA</option>
            <option value="BB">BB</option>
            <option value="CC">CC</option>
          </Select>
          <Subject
            variant="yellow"
            subjectName="MD"
            subjectFullname="Matemática discreta"
            friends="2"
          />
          <Chat />
        </div>
      </div>
      <br />
      <Table />

      <h1 className="mt-10 ml-6 mb-4 block text-3xl font-bold leading-none">
        Botones de prueba
      </h1>
      <Button onClick={getUsers}>Mostrar Usuarios</Button>
      <Button onClick={mostrarAsignaturasYear}>
        Mostrar asignaturas por año
      </Button>
      <Button onClick={iniciarCrearApuesta}>Crear Apuesta</Button>
      <Button onClick={solicitarAmistad}>Solicitar Amistad</Button>
      <Button onClick={mostrarSolicitud}>Mostrar Solicitudes</Button>
      <Button onClick={aceptarSolicitud}>Aceptar Solicitud</Button>
      <Button onClick={rechazarSolicitud}>Rechazar Solicitud</Button>
      <Button onClick={iniciarSesion}>
        Iniciar Sesión (NO FUNCINA EN TEST, USAR LOGIN)
      </Button>
      <Button onClick={cerrarSesion}>Cerrar Sesión</Button>
      <Button onClick={cursarAsignatura}>Cursar Asignatura</Button>
      <Button onClick={actualizarNota}>Actualizar Nota</Button>
      <Button onClick={createSubject}>Crear asignatura (test)</Button>
      <Button onClick={debugCambioId}>Pruebas</Button>
      <Button onClick={leerExpediente}>Subir Archivo</Button>

      <h1 className="mt-10 ml-6 mb-4 block text-3xl font-bold leading-none">
        Inputs de prueba
      </h1>

      <form>
        <Input id="email" type="email" placeholder="Email"></Input>
        <Input id="password" type="password" placeholder="Contraseña"></Input>
        <Input
          id="year"
          type="number"
          min="1"
          max="4"
          placeholder="Año (mostrar asignaturas)"
        ></Input>
        <Input
          id="uidReceptor"
          type="string"
          placeholder="UID (solicitar amistad)"
        ></Input>
        <Input
          id="betValueCheck"
          type="checkbox"
          placeholder="Aprobar?"
        ></Input>
        <Input
          id="uidApostado"
          type="text"
          placeholder="UID del apostado"
        ></Input>
        <Input
          id="betNotaCheck"
          type="checkbox"
          placeholder="Apuestas pa nota?"
        ></Input>
        <Input
          id="notaApostada"
          type="number"
          min="0"
          max="10"
          placeholder="Introduce la nota"
        ></Input>
        <Input
          id="idAsignatura"
          type="text"
          placeholder="Id asignatura apostada"
        ></Input>
        <Input
          id="cantidadDinero"
          type="number"
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
        <Input id="acronym" type="text" placeholder="acronym"></Input>
        <Input id="code" type="text" placeholder="code"></Input>
        <Input id="degreeId" type="text" placeholder="degreeId"></Input>
        <Input id="expediente" type="file"></Input>
        <Input id="name" type="text" placeholder="name"></Input>
        <Input id="year" type="number" placeholder="year"></Input>
        <Input
          id="solicitanteId"
          type="text"
          placeholder="Id de solicitante de amistad"
        ></Input>
      </form>
    </div>
  );
}
