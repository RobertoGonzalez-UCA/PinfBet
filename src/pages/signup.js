import React, {
  useCallback
} from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";

import Label from "../components/label";
import Input from "../components/input";
import Button from "../components/button";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const {
        nick,
        email,
        password
      } = event.target.elements;

      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(
            email.value,
            password.value
          );
        await firebase
          .firestore()
          .collection("users")
          .add({
            nickname: nick.value,
            coins: 0,
            uid: firebase.auth()
              .currentUser.uid,
            coinsEarned: 0,
            hits: 0,
            fails: 0,
            hitStreak: 0
          });
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

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
          onSubmit={handleSignUp}
        >
          <div className="w-96 bg-gray-100 rounded-lg p-8 flex flex-col">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Crea tu cuenta
            </h2>
            <div className="relative mb-5">
              <Label for="nick">
                Nick
              </Label>
              <Input
                className="w-full"
                id="nick"
                name="nick"
                type="nick"
                required="true"
              />
            </div>
            <div className="relative mb-1">
              <Label for="email">
                Email
              </Label>
              <Input
                className="w-full"
                id="email"
                name="email"
                type="email"
                required="true"
              />
            </div>
            <div className="relative mb-3">
              <Label for="password">
                Password
              </Label>
              <Input
                className="w-full"
                id="password"
                name="password"
                type="password"
                required="true"
              />
            </div>
            <Link
              className="mt-1 mb-2 flex justify-center text-xs text-blue-400 hover:underline"
              to="/login"
            >
              ¿Ya tienes una cuenta?
              Inicia sesión
            </Link>
            <Button type="submit">
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
        </form>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
