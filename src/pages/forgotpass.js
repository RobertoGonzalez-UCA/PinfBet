import React from "react";
import { history } from "react-router-dom";
import { withRouter } from "react-router";

import Label from "../components/label";
import Input from "../components/input";
import Button from "../components/button";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Forgotpass = ({ history }) => {
  var auth = firebase.auth();

  const handleReset = React.useCallback(
    async (event) => {
      event.preventDefault();
      const { email } = event.target.elements;
      try {
        await auth.sendPasswordResetEmail(email.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div
      className="bg-cover bg-center"
      style={{
        "background-image": "url(https://i.imgur.com/Hip5s6W.png)"
      }}
    >
      <form
        className="flex items-center justify-center min-h-screen text-gray-600 body-font"
        onSubmit={handleReset}
      >
        <div className="w-96 bg-gray-100 rounded-lg p-8 flex flex-col">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Recupera tu cuenta
          </h2>
          <div className="relative mb-6">
            <Input
              type="email"
              placeholder="Escribe tu email"
              id="email"
              name="email"
              className="w-full"
            />
          </div>
          <Button
            className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
            type="submit"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Forgotpass);
