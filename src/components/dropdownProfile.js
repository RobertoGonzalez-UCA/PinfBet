import React from "react";
import Popper from "popper.js";
//import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const DropdownProfile = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
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
  // bg colors
  return (
    // <ClickAwayListener onClickAway={closeDropdownPopover}>
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
            <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
            <a
              href="#link"
              className="transition duration-250 text-sm py-3 px-4 rounded-lg font-normal block w-full whitespace-no-wrap bg-transparent text-white hover:bg-gray-600"
              onClick={(e) => e.preventDefault()}
            >
              Cerrar sesión
            </a>
          </div>
        </div>
      </div>
    </div>
    //</ClickAwayListener>
  );
};

export default function DropdownRender() {
  return (
    <>
      <DropdownProfile color="gray" />
    </>
  );
}
