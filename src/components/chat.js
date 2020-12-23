import React from "react";
import Input from "../components/input";
import Popper from "popper.js";

const Chat = ({ color }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "top-end"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-green-500")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <input
              type="image"
              src="https://i.imgur.com/bFwS64U.png"
              alt="Menu Perfil"
              width="40"
              className="focus:outline-none"
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
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <div className="relative flex items-center px-2">
                <input
                  type="image"
                  src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png"
                  alt="Atrás"
                  width="30"
                  className="transition duration-500 rounded-2xl hover:bg-gray-200 focus:outline-none"
                ></input>
                <div className="text-sm px-2 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800">
                  Nombre del amigo
                </div>
              </div>
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-800 opacity-25" />
              <div className="block py-14"></div>
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-800 opacity-25" />
              <Input variant="chat" placeholder="Escribe un mensaje..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Chat color="white" />
    </>
  );
}
