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
              className="mt-1 mb-2 flex justify-center text-xs text-blue-400 hover:underline"
              to="/forgotpass"
            >
              ¿Olvidaste la contrasña?
            </Link>

            <Button type="submit">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);

/*

// COMPONENTS
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";

// FUNCTIONS
import {
  iniciarSesion,
  userLogged
} from "../db.js";
import {
  Link,
  Redirect
} from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState(
    ""
  );
  const [
    password,
    setPassword
  ] = useState("");

  return (
    <div>
      {!userLogged() && (
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
                  id="password"
                  name="password"
                  className="w-full"
                  onChange={(ev) =>
                    setPassword(
                      ev.target.value
                    )
                  }
                />
              </div>
              <Link
                to="/forgotpass"
                className="mb-2 flex justify-center text-xs text-blue-400 hover:underline"
              >
                ¿Has olvidado la
                contraseña?
              </Link>
              <Button
                className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                onClick={() =>
                  iniciarSesion(
                    email,
                    password
                  )
                }
              >
                Entrar
              </Button>
            </div>
          </section>
        </div>
      )}
      {userLogged() && (
        <Redirect to="/" />
      )}
    </div>
  );
}

*/
