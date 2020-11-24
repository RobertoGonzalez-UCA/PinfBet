import React from "react";

import initFirebase from "./firebase";
import "./style.css";
// import "firebase/auth";
import { createUser, getUsers, solicitarAmistad } from "./db.js";

initFirebase();

export default function App() {
  return (
    <div>
      <h1>Hello PinfBetero!</h1>
      <p>Esto es un párrafo.</p>

      <button onClick={createUser}> Crear Usuario </button>
      <button onClick={getUsers}>Mostrar Usuarios</button>
      <button onClick={solicitarAmistad}>Solicitar Amistad</button>
    </div>
  );
}
