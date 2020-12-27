import React from "react";
import Input from "../components/input";
import Popper from "popper.js";

export default function Chat() {
  const [friendlistShow, setFriendlistShow] = React.useState(false);
  const [chatShow, setChatShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverListDropdownRef = React.createRef();
  const popoverChatDropdownRef = React.createRef();
  const openFriendlist = () => {
    new Popper(btnDropdownRef.current, popoverListDropdownRef.current, {
      placement: "top-end"
    });
    setFriendlistShow(true);
  };
  const closeFriendlist = () => {
    setFriendlistShow(false);
  };
  const openChat = () => {
    new Popper(btnDropdownRef.current, popoverChatDropdownRef.current, {
      placement: "top-end"
    });
    setChatShow(true);
  };
  const closeChat = () => {
    setChatShow(false);
  };
  return (
    <>
      <div className="fixed bottom-0 right-0">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-6/12 md:w-4/12 px-4">
            <div className="relative inline-flex align-middle w-full">
              <input
                type="image"
                src="https://i.imgur.com/bFwS64U.png"
                alt="Menu Perfil"
                width="40"
                height="40"
                className="block focus:outline-none"
                ref={btnDropdownRef}
                onClick={() => {
                  friendlistShow ? closeFriendlist() : openFriendlist();
                  chatShow ? closeFriendlist() : closeChat();
                  chatShow ? closeChat() : closeChat();
                }}
              ></input>
              <div
                ref={popoverListDropdownRef}
                className={
                  (friendlistShow ? "block " : "hidden ") +
                  "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white"
                }
                style={{ minWidth: "13rem", minHeight: "14rem" }}
              >
                <div
                  className="relative flex items-center px-2 hover:bg-gray-200"
                  onClick={() => {
                    closeFriendlist();
                    openChat();
                  }}
                >
                  <img
                    src="https://i.imgur.com/q385Ahc.png"
                    alt="Amigo"
                    width="30"
                  ></img>
                  <div>
                    <div className="text-sm px-2 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800">
                      Nombre del amigo
                    </div>
                    <div className="text-sm px-2 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-400">
                      Ultimo mensaje
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={popoverChatDropdownRef}
                className={
                  (chatShow ? "block " : "hidden ") +
                  "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white"
                }
                style={{ minWidth: "13rem", minHeight: "14rem" }}
              >
                <div className="relative flex items-center px-2">
                  <input
                    type="image"
                    src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png"
                    alt="Amigo"
                    width="30"
                    onClick={() => {
                      openFriendlist();
                      closeChat();
                    }}
                    className="transition duration-500 rounded-2xl hover:bg-gray-200 focus:outline-none"
                  ></input>
                  <div className="text-sm px-2 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800">
                    Nombre del amigo
                  </div>
                </div>
                <div className="h-0 my-2 border border-solid border-t-0 border-gray-800 opacity-25" />
                <div className="block py-16"></div>
                <div className="h-0 my-2 border border-solid border-t-0 border-gray-800 opacity-25" />
                <Input variant="chat" placeholder="Escribe un mensaje..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
