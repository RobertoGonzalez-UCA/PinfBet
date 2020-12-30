import React from "react";
import Navbar from "../components/navbar";
import Chat from "../components/chat";
import Button from "../components/button";
import Input from "../components/input";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Userconfig() {
  return (
    <div>
      <Navbar />
      <Chat />
      <div className="ml-12">
        <p className="mt-12 mb-4 block text-3xl font-bold leading-none">
          Foto de perfil
        </p>
        <div className="flex">
          <img
            className="mt-2"
            src="https://i.imgur.com/q385Ahc.png"
            alt="Foto de perfil"
            width="175"
          />

          <div className="flex-none">
            <div className="flex items-center">
              <Button variant="upload" className="mt-2 ml-4">
                Elegir archivo
              </Button>
              <p className="text-sm ml-2">
                {" "}
                No se ha seleccionado ningún archivo{" "}
              </p>
            </div>
            <p className="text-xs mt-2 mb-2 ml-4 text-gray-500 w-1/3">
              Las imágenes cargadas se redimensionarán y se cortarán de forma
              cuadrada empezando desde la parte superior. En la mayoría de los
              lugares, la imagen aparecerá en un círculo, como en el ejemplo.
            </p>
            <div>
              <Button className="mt-2 ml-4">Cargar imagen</Button>
            </div>
          </div>
        </div>
        <p className="ml-11 mt-2 text-xs text-blue-700 hover:underline cursor-pointer">
          Eliminar imagen
        </p>
        <p className="mt-7 mb-4 block text-3xl font-bold leading-none">
          Tu perfil
        </p>
        <div className="ml-6">
          <p className="mt-5 mb-4 block leading-none">Nombre de usuario</p>
          <Input className="w-80" />
          <p className="mt-5 mb-4 block leading-none">Descripción</p>
          <Input className="h-36 w-80" />
          <p className="text-xs mt-2 mb-2 text-gray-500 w-1/3">
            200 caracteres como maximo, sin símbolos
          </p>
          <Button>Guardar cambios</Button>
        </div>
        <p className="mt-10 mb-4 block text-3xl font-bold leading-none">
          Cambiar correo
        </p>
        <div className="ml-6">
          <p className="mt-5 mb-4 block leading-none">
            Dirección de correo electrónico
          </p>
          <Input
            type="email"
            placeholder="usuario@example.com"
            className="w-80"
          />
          <Button className="mt-4">Guardar cambios</Button>
        </div>
        <p className="mt-10 mb-4 block text-3xl font-bold leading-none">
          Cambiar contraseña
        </p>
        <div className="ml-6">
          <p className="mt-5 mb-4 block leading-none">Contraseña actual</p>
          <Input type="password" className="w-80" />
          <p className="mt-5 mb-4 block leading-none">Nueva contraseña</p>
          <Input type="password" className="w-80" />
          <p className="mt-5 mb-4 block leading-none">Repetir contraseña</p>
          <Input type="password" className="w-80" />
          <Button className="mt-4 mb-20">Guardar cambios</Button>
        </div>
      </div>
    </div>
  );
}
