import React, { useState } from "react";

// COMPONENTS
import Label from "../components/label";
import Input from "../components/input";
import Button from "../components/button";

// FIREBASE
import firebase from "firebase/app";

// FUNCTIONS
import { registrarUsuario } from "../db.js";
import {
  Link,
  Redirect
} from "react-router-dom";

export default function Signup() {
  const [nick, setNick] = useState("");

  const [email, setEmail] = useState(
    ""
  );

  const [
    password,
    setPassword
  ] = useState("");

  const loggedIn = false; // Hay que mirar el estado en Firebase

  return (
    <div>
      {!loggedIn && (
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
                Crea una cuenta
              </h2>
              <div className="relative mb-5">
                <Label
                  for="nick"
                  className="leading-7 text-sm text-gray-600"
                  text="Nick"
                />
                <Input
                  type="text"
                  id="nick"
                  name="nick"
                  className="w-full"
                  onChange={(ev) =>
                    setNick(
                      ev.target.value
                    )
                  }
                />
              </div>
              <div className="relative mb-1">
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
                  onChange={(ev) =>
                    setEmail(
                      ev.target.value
                    )
                  }
                />
              </div>
              <div className="relative mb-3">
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
                  onChange={(ev) =>
                    setPassword(
                      ev.target.value
                    )
                  }
                />
              </div>

              <Button
                className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                onClick={() =>
                  registrarUsuario(
                    nick,
                    email,
                    password
                  )
                }
              >
                Regístrate
              </Button>

              <p className="text-xs text-gray-500 mt-3">
                Al hacer clic en
                Registrarte, aceptas
                nuestras{" "}
                <Link
                  className="text-blue-400 hover:underline"
                  to="/legalterms"
                >
                  Condiciones
                </Link>
                . Obtén más información
                sobre cómo recopilamos,
                usamos y compartimos tu
                información en la{" "}
                <Link
                  className="text-blue-400 hover:underline"
                  to="/legalterms"
                >
                  Política de datos
                </Link>
                , así como el uso que
                hacemos de las cookies y
                tecnologías similares en
                nuestra{" "}
                <Link
                  className="text-blue-400 hover:underline"
                  to="/legalterms"
                >
                  Política de cookies
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      )}
      {loggedIn && <Redirect to="/" />}
    </div>
  );
}
