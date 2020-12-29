import React from "react";
import Label from "../components/label";
import Input from "../components/input";
import Button from "../components/button";

export default function Forgotpass() {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        "background-image":
          "url(https://i.imgur.com/Hip5s6W.png)"
      }}
    >
      <section className="flex items-center justify-center min-h-screen text-gray-600 body-font">
        <div className="w-96 bg-gray-100 rounded-lg p-8 flex flex-col">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Recupera tu cuenta
          </h2>
          <div className="relative mb-6">
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
          <Button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Enviar
          </Button>
        </div>
      </section>
    </div>
  );
}
