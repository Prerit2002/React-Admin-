import React from "react";
import { createPopper } from "@popperjs/core";

export default function  Dropdowns({ color }) {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-black-700")
    : (bgColor = "bg-black-100");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              DashBoard
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded-full  mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="/"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-white text-black " 
                 
                }
               
              >
                Home
              </a>
              <a
                href="/employees"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-white text-black" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                
              >
                Employees
              </a>
              <a
                href="/leads"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-white text-black" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
               
              >
                Leads
              </a>
              <a
                href="/commision"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-white text-black" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
               
              >
                Commisions
              </a>
              <a
                href="/settings"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-white text-black" +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
               
              >
                Settings
              </a>
              <div />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

