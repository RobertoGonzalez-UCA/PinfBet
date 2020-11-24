import React from "react";

import initFirebase from "./firebase";
import "/css/tailwind.css";
// import "firebase/auth";
import { createUser, getUsers, solicitarAmistad, crearApuesta } from "./db.js";

initFirebase();

export default function App() {
  return (
    <div>
      <h1>Hello PinfBetero!</h1>
      <p>Esto es un HUIHHIljpárrafo.</p>

      <button onClick={createUser}> Crear Usuario </button>
      <button onClick={getUsers}>Mostrar Usuarios</button>
      <button onClick={crearApuesta}>CrearApuesta</button>
      <button class="bg-purple" onClick={solicitarAmistad}>
        Solicitar Amistad
      </button>
    </div>
  );
}
