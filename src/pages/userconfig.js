import React from "react";
import Navbar from "../components/navbar";
import Chat from "../components/chat";
import Button from "../components/button";
import Input from "../components/input";
import Footer from "../components/footer";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function Userconfig() {
  var user = firebase.auth()
    .currentUser;

  const [
    spells,
    setSpells
  ] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await firebase
        .firestore()
        .collection("users")
        .where("uid", "==", user.uid)
        .get();

      setSpells(
        data.docs.map((doc) => ({
          ...doc.data()
        }))
      );
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Chat />

      {spells.map((spell) => (
        <section class="py-14 bg-gray-100 bg-opacity-50">
          <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
            <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-green-400 rounded-t">
              <div class="max-w-sm mx-auto md:w-full md:mx-0">
                <div class="inline-flex items-center space-x-4">
                  <img
                    class="w-10 h-10 object-cover rounded-full"
                    alt="User avatar"
                    src="https://i.imgur.com/q385Ahc.png"
                  />

                  <h1 class="text-gray-600">
                    {spell.nickname}
                  </h1>
                </div>
              </div>
            </div>
            <div class="bg-white space-y-6">
              <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 class="md:w-1/3 max-w-sm mx-auto">
                  Cuenta
                </h2>
                <div class="md:w-2/3 max-w-sm mx-auto">
                  <label class="text-sm text-gray-400">
                    Email
                  </label>
                  <div class="w-full inline-flex border rounded">
                    <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                      <svg
                        fill="none"
                        class="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <Input
                      type="email"
                      class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      placeholder="pinfbet@example.com"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <hr />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <h2 class="md:w-1/3 mx-auto max-w-sm">
                  Información personal
                </h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <label class="text-sm text-gray-400">
                      Nickname
                    </label>
                    <div class="w-full inline-flex border rounded">
                      <div class="w-1/12 pt-2 bg-gray-100">
                        <svg
                          fill="none"
                          class="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <Input
                        type="text"
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder={
                          spell.nickname
                        }
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">
                  Cambiar contraseña
                </h2>

                <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                  <div class="w-full inline-flex border rounded">
                    <div class="w-1/12 pt-2">
                      <svg
                        fill="none"
                        class="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <Input
                      type="password"
                      class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                      placeholder="New"
                    />
                  </div>
                </div>

                <div class="md:w-3/12 text-center md:pl-6">
                  <Button
                    variant="default"
                    className="flex"
                  >
                    <svg
                      fill="none"
                      class="w-4 text-white mr-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Actualizar
                  </Button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </section>
      ))}

      {/* <div className="max-w-xl mx-auto px-8">
        <div className="pt-6 pb-8 sm:pt-8">
          <p className="text-sm text-gray-700">
            Actualiza tu perfil,
            ayudanos a tenerte
            actualizado y que tu
            experiencia se mejor.
          </p>
          <div className="mt-6">
            <div className="max-w-4xl mx-auto">
              <label className="block">
                <span className="block font-medium text-sm text-gray-900 leading-tight">
                  Dirección de correo
                  electrónico
                </span>
                <div className="mt-2">
                  <input
                    type="email"
                    className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                    placeholder="pinfbet@example.com"
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="border-t-2 border-gray-200 px-0 py-5 flex justify-end">
            <Button
              type="button"
              className="ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
            >
              Actualizar
            </Button>
          </div>
        </div> */}

      {/* <div className="ml-12">
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
              <input className="ml-4" type="file" />
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
  </div>*/}

      <Footer />
    </div>
  );
}
