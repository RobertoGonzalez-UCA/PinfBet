import React from "react";
import Popper from "popper.js";
import NotificationList from "../components/notificationList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Link } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
export default function DropdownNotification() {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);

  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {

    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleClickAway = () => {
    closeDropdownPopover();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-6/12 md:w-4/12 ml-5 mr-5">
            <div className="relative inline-flex align-middle w-full">
              <div className="flex">
                <div className="animate-ping absolute -ml-8 -mt-7 p-1.5 rounded-full bg-green-500 opacity-75">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="bell"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    className="cursor-pointer text-gray-300"
                  >
                    <path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path>
                  </svg>
                </div>
                <div className="relative -ml-8 -mt-7 p-1.5 rounded-full bg-green-500">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="bell"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    className="cursor-pointer text-gray-300"
                    ref={btnDropdownRef}
                    onClick={() => {
                      dropdownPopoverShow
                        ? closeDropdownPopover()
                        : openDropdownPopover();
                    }}
                  >
                    <path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path>
                  </svg>
                </div>
              </div>
              <div
                ref={popoverDropdownRef}
                className={dropdownPopoverShow ? "block " : "hidden "}
              ><NotificationList /></div>
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
}
