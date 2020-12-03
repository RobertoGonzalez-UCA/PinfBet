import React from "react";
import Button from "../components/button";
import Input from "../components/input";

export default function Navbar() {
  return (
    <nav class="bg-gray-600 relative flex items-center justify-between h-15">
      <div class="ml-4">
        <img
          src="https://i.imgur.com/22YMzOo.png"
          alt="Logo PinfBet"
          width="200"
        ></img>
      </div>
      <div class="relative flex items-center justify-between h-15 mr-4">
        <Input placeholder="Buscar..." />
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
  );
}
