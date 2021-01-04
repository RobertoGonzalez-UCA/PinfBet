import React from "react";
import Popper from "popper.js";
import Button from "../components/button";
//import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function DropdownProfile() {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      {" "}
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <input
              type="image"
              src="https://i.imgur.com/q385Ahc.png"
              alt="Menu Perfil"
              className="focus:outline-none"
              width="40"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            ></input>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 bg-gray-500"
              }
              style={{ minWidth: "12rem" }}
            >
              <Link
                to="/profile"
                className="transition duration-250 text-sm py-3 px-4 rounded-lg font-normal block w-full whitespace-no-wrap bg-transparent text-white hover:bg-gray-600"
              >
                Perfil
              </Link>
              <Link
                to="/userconfig"
                className="transition duration-250 text-sm py-3 px-4 rounded-lg font-normal block w-full whitespace-no-wrap bg-transparent text-white hover:bg-gray-600"
              >
                Configuración
              </Link>
              <div
                className="transition duration-250 text-sm py-3 px-4 rounded-lg font-normal block w-full whitespace-no-wrap bg-transparent text-white hover:bg-gray-600 cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                Subir expediente
              </div>
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
              <div
                className="transition duration-250 text-sm py-3 px-4 rounded-lg font-normal block w-full whitespace-no-wrap bg-transparent text-white hover:bg-gray-600 cursor-pointer"
                onClick={() => firebase.auth().signOut()}
              >
                Cerrar sesión
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="relative w-auto my-6 mx-auto max-w-6xl"
              style={{
                minWidth: "500px",
                maxWidth: "500px"
              }}
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Carga tu expediente
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-gray-600 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="p-6">
                  Para descargar tu expediente, dirigete a --- e inicia sesión
                  con tus datos de la UCA. Podrás descargarlo haciendo click en
                  ---. Hasta que no hayas cargado tu expediente, no podrás
                  realizar apuestas.
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <input type="file" className="mr-1 transform scale-90" />
                  <Button onClick={() => setShowModal(false)}>Cargar</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
