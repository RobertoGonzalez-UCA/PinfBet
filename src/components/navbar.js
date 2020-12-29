import React from "react";
import Button from "../components/button";
import DropdownProfile from "../components/dropdownProfile";
import Input from "../components/input";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);
  const openMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <nav class="bg-gray-600">
      <div class="relative flex items-center justify-between h-16">
        <div class="block sm:hidden">
          <button
            id="boton"
            onClick={() => {
              showMenu ? closeMenu() : openMenu();
            }}
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <Link to="/" className="ml-4 mr-4 flex-shrink-0 flex items-center">
          <img
            src="https://i.imgur.com/TYNeajA.png"
            alt="Logo PinfBet"
            width="40"
            class="mr-1 sm:"
          ></img>
          <img
            src="https://i.imgur.com/3X91WvI.png"
            alt="Logo PinfBet"
            width="140"
            class="hidden sm:block"
          ></img>
        </Link>

        <div class="relative flex items-center">
          <div class="hidden sm:block">
            <div class="relative flex items-center ">
              <Input placeholder="Buscar..." />
              <Link to="/bets">
                <Button variant="seleccion">Apuestas</Button>
              </Link>
              <Link to="/social">
                <Button variant="seleccion">Social</Button>
              </Link>
              <Link to="/rankings">
                <Button variant="seleccion">Rankings</Button>
              </Link>
              <span class="mr-4 font-semibold text-green-600">0.00 PFC</span>
              <DropdownProfile />
            </div>
          </div>
        </div>
      </div>
      {showMenu ? (
        <>
          <div id="menu" class="sm:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/bets"
                class="transition duration-250 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Apuestas
              </Link>
              <Link
                to="/social"
                class="transition duration-250 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Social
              </Link>
              <Link
                to="/rankings"
                class="transition duration-250 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Rankings
              </Link>
              <Link
                to="/profile"
                class="transition duration-250 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Perfil
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </nav>
  );
}
