import React from "react";
import Popper from "popper.js";
import Button from "../components/button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Link } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function DropdownProfile() {
  // dropdown props
  const [
    dropdownPopoverShow,
    setDropdownPopoverShow
  ] = React.useState(false);
  const [
    showModal,
    setShowModal
  ] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(
      btnDropdownRef.current,
      popoverDropdownRef.current,
      {
        placement: "bottom-end"
      }
    );
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleClickAway = () => {
    closeDropdownPopover();
  };

  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
    >
      <div>
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
                  (dropdownPopoverShow
                    ? "block "
                    : "hidden ") +
                  "text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 bg-gray-500"
                }
                style={{
                  minWidth: "12rem"
                }}
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
                <Link
                  to="/uploaddata"
                  className="transition duration-250 text-sm py-3 px-4 rounded-lg font-normal block w-full whitespace-no-wrap bg-transparent text-white hover:bg-gray-600"
                >
                  Subir datos académicos
                </Link>
                <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
                <div
                  className="transition duration-250 text-sm py-3 px-4 rounded-lg font-normal block w-full whitespace-no-wrap bg-transparent text-white hover:bg-gray-600 cursor-pointer"
                  onClick={() =>
                    firebase
                      .auth()
                      .signOut()
                  }
                >
                  Cerrar sesión
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
}
