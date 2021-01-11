import React from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { aceptarSolicitud, rechazarSolicitud, deleteTransactions } from "../db";

export default function NotificationList() {
  var user = firebase.auth().currentUser;

  const [friendships, setFriendships] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      await firebase
        .firestore()
        .collection("friendships")
        .where("uid_b", "==", user.uid)
        .where("status", "==", "PENDING")
        .onSnapshot((snap) => {
          const data = snap.docs.map((doc) => doc.data());
          setFriendships(data);
        });
    };
    fetchData();
  }, []);

  // ----------------------------------------------------
  const [transactions, setTransactions] = React.useState([]);

  const [fallos, setFallos] = React.useState([]);

  const [aciertos, setAciertos] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      await firebase
        .firestore()
        .collection("transactions")
        .where("uid_apostante", "==", user.uid)
        .onSnapshot((snap) => {
          const data = snap.docs.map((doc) => doc.data());
          setTransactions(data);
        });
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    function orderAciertos() {
      return transactions.filter((transaction) => transaction.coins > 0);
    }
    setAciertos(orderAciertos);
  }, [transactions]);

  React.useEffect(() => {
    function orderFallos() {
      return transactions.filter((transaction) => transaction.coins === 0);
    }
    setFallos(orderFallos);
  }, [transactions]);

  return (
    <>
      <div className="fixed top-16 right-0">
        <div class="container flex mx-auto w-full items-center justify-center">
          <ul class="flex flex-col bg-gray-300 p-4">
            <h1 className="sm:text-2xl text-xl font-medium title-font text-gray-900 mb-4">
              Notificaciones
            </h1>
            {friendships.map((friendship) => (
              <li class="border-gray-400 flex flex-row mb-2">
                <div class="select-none bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                  <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="user-switch"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M759 335c0-137-111-248-248-248S263 198 263 335c0 82.8 40.6 156.2 103 201.2-.4.2-.7.3-.9.4-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00136 874.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C356 614.2 431 583 511 583c137 0 248-111 248-248zM511 507c-95 0-172-77-172-172s77-172 172-172 172 77 172 172-77 172-172 172zm105 221h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H703.5l47.2-60.1a8.1 8.1 0 001.7-4.9c0-4.4-3.6-8-8-8h-72.6c-4.9 0-9.5 2.3-12.6 6.1l-68.5 87.1c-4.4 5.6-6.8 12.6-6.8 19.8.1 17.7 14.4 32 32.1 32zm240 64H592c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h176.5l-47.2 60.1a8.1 8.1 0 00-1.7 4.9c0 4.4 3.6 8 8 8h72.6c4.9 0 9.5-2.3 12.6-6.1l68.5-87.1c4.4-5.6 6.8-12.6 6.8-19.8-.1-17.7-14.4-32-32.1-32z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium">Petición de amistad</div>
                    <div class="text-gray-600 text-sm">
                      {friendship.uid_a} quiere ser tu amigo.
                    </div>
                  </div>
                  <div class="flex text-gray-600 text-xs">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="check"
                      width="1.5em"
                      height="1.5em"
                      fill="currentColor"
                      aria-hidden="true"
                      className="mr-3 text-green-500 cursor-pointer"
                      onClick={() =>
                        aceptarSolicitud(user.uid, friendship.uid_a)
                      }
                    >
                      <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                    </svg>
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="close"
                      width="1.5em"
                      height="1.5em"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-red-500 cursor-pointer"
                      onClick={() =>
                        rechazarSolicitud(user.uid, friendship.uid_a)
                      }
                    >
                      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                    </svg>
                  </div>
                </div>
              </li>
            ))}

            {aciertos.map((acierto) => (
              <li class="border-green-200 flex flex-row mb-2">
                <div class="select-none bg-green-100 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                  <div class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full mr-4">
                    <span class="text-green-500">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="h-6 w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium text-green-800">
                      Ganaste la apuesta
                    </div>
                    <div class="text-green-600 text-sm">
                      {acierto.nickname} sacó un {acierto.nota} en{" "}
                      {acierto.subject}.
                    </div>
                  </div>
                  <span class="text-green-500">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="h-6 w-6"
                      onClick={() => {deleteTransactions(acierto);
                    }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </li>
            ))}
            {fallos.map((fallo) => (
              <li class="border-red-200 flex flex-row mb-2">
                <div class="select-none bg-red-100 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                  <div class="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full mr-4">
                    <span class="text-red-500">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="h-6 w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium text-red-800">
                      Perdiste la apuesta
                    </div>
                    <div class="text-red-600 text-sm">
                      {fallo.nickname} sacó un {fallo.nota} en {fallo.subject}.
                    </div>
                  </div>
                  <span class="text-red-500">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="h-6 w-6"
                      onClick={"hidden"}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
