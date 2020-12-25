import React from "react";
import Label from "../components/label";
import Input from "../components/input";
import Button from "../components/button";

export default function Login() {
  return (
    <section className="flex items-center justify-center text-gray-600 body-font">
      <div className="w-96 bg-gray-100 rounded-lg p-8 flex flex-col mt-20">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Inicia sesión
        </h2>
        <div className="relative mb-2">
          <Label
            for="email"
            className="leading-7 text-sm text-gray-600"
            text="Email"
          />
          <Input
            type="email"
            id="email"
            name="email"
            className="w-full"
          />
        </div>
        <div className="relative mb-4">
          <Label
            for="password"
            className="leading-7 text-sm text-gray-600"
            text="Contraseña"
          />
          <Input
            type="password"
            id="p"
            name="email"
            className="w-full"
          />
        </div>
        <Button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
          Entrar
        </Button>
      </div>
    </section>
  );
}
