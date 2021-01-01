import React, {
  useCallback,
  useContext
} from "react";
import {
  withRouter,
  Redirect
} from "react-router";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { AuthContext } from "../Auth";

import Label from "../components/label";
import Input from "../components/input";
import Button from "../components/button";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const {
        email,
        password
      } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(
            email.value,
            password.value
          );
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(
    AuthContext
  );

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{
          "background-image":
            "url(https://i.imgur.com/Hip5s6W.png)"
        }}
      >
        <form
          className="flex items-center justify-center min-h-screen text-gray-600 body-font"
          onSubmit={handleLogin}
        >
          <div className="w-96 bg-gray-100 rounded-lg p-8 flex flex-col">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Inicia sesión
            </h2>
            <div className="relative mb-2">
              <Label for="email">
                Email
              </Label>
              <Input
                className="w-full"
                id="email"
                name="email"
                type="email"
              />
            </div>

            <div className="relative mb-2">
              <Label for="password">
                Password
              </Label>
              <Input
                className="w-full"
                id="password"
                name="password"
                type="password"
              />
            </div>
            <Link
              className="mt-4 mb-2 flex justify-center text-xs text-blue-400 hover:underline"
              to="/forgotpass"
            >
              ¿Olvidaste la contrasña?
            </Link>

            <div className="divide-y divide-black divide-opacity-10">
              <div className="flex justify-center">
                <Button
                  className="w-3/4 mb-5"
                  type="submit"
                >
                  Entrar
                </Button>
              </div>
              <div>
                <Link
                  className="flex justify-center"
                  to="/signup"
                >
                  <Button variant="bold">
                    Crear una cuenta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
