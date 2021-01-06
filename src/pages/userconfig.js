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

  const handleUpdateEmail = React.useCallback(
    async (event) => {
      event.preventDefault();
      const {
        newEmail
      } = event.target.elements;

      user
        .updateEmail(newEmail.value)
        .then(function () {
          alert(
            "Email actualizado correctamente."
          );
        })
        .catch(function (error) {
          alert(error);
        });
    },
    []
  );

  const handleUpdatePass = React.useCallback(
    async (event) => {
      event.preventDefault();
      const {
        newPass
      } = event.target.elements;

      user
        .updatePassword(newPass.value)
        .then(function () {
          alert(
            "Contraseña actualizada correctamente."
          );
        })
        .catch(function (error) {
          alert(error);
        });
    },
    []
  );

  return (
    <div>
      <Navbar />
      <Chat />

      {spells.map((spell) => (
        <section class="pt-32 pb-36 bg-gray-100 bg-opacity-50">
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
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2 cursor-not-allowed"
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
              <form
                class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center"
                onSubmit={
                  handleUpdateEmail
                }
              >
                <h2 class="md:w-4/12 max-w-sm mx-auto">
                  Cambiar email
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <Input
                      id="newEmail"
                      type="email"
                      class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                      placeholder={
                        user.email
                      }
                    />
                  </div>
                </div>
                <div class="md:w-3/12 text-center md:pl-6">
                  <Button
                    variant="default"
                    className="flex"
                    type="submit"
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
              </form>
              <hr />
              <form
                class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center"
                onSubmit={
                  handleUpdatePass
                }
              >
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
                      id="newPass"
                      type="password"
                      class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                      placeholder="Nueva contraseña"
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
              </form>
              <hr />
            </div>
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
}
