import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  // Store,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const [widthSide, setWidthSide] = useState("14rem");
  const [displaySide, setDisplaySide] = useState("flex");
  const [itemsAlign, setItemsAlign] = useState("start");
  const [show, setShow] = useState(true);

  const mobileNavbar = () => {
    setWidthSide("4rem");
    setDisplaySide("none");
    setShow(false);
    setItemsAlign("center");
  };

  const desktopNavbar = () => {
    setWidthSide("14rem");
    setDisplaySide("flex");
    setShow(true);
    setItemsAlign("start");
  };

  //   const handleLogout = async () => {
  //     history.push("/auth/login");
  //   };

  return (
    <div
      style={{ width: widthSide }}
      className="flex flex-col gap-3 bg-[#3d6d8c] text-white  px-6"
    >
      <div className="flex items-center gap-2 border-b border-gray-400    pl-4 py-4 mt-3 justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold  text-xl font-sans"
        >
          Jes.Group
        </Link>
        <button
          className="text-white hover:text-primaryColor"
          onClick={mobileNavbar}
          style={{ display: show ? "block" : "none" }}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM13.79 15C14.08 15.29 14.08 15.77 13.79 16.06C13.64 16.21 13.45 16.28 13.26 16.28C13.07 16.28 12.88 16.21 12.73 16.06L9.2 12.53C8.91 12.24 8.91 11.76 9.2 11.47L12.73 7.94C13.02 7.65 13.5 7.65 13.79 7.94C14.08 8.23 14.08 8.71 13.79 9L10.79 12L13.79 15Z"
              fill="#fff"
            />
          </svg>
        </button>
        <button
          className="text-white hover:text-primaryColor z-10"
          onClick={desktopNavbar}
          style={{ display: !show ? "block" : "none" }}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>

      <div
        style={{ alignItems: itemsAlign }}
        className="flex flex-col h-full justify-between  py-5 text-gray-900"
      >
        <div className="flex flex-col  h-full justify-between">
          <div>
            <h3
              style={{ display: displaySide }}
              className="text-white font-sans"
            >
              Menu
            </h3>
            <ul
              style={{ alignItems: itemsAlign }}
              className="flex flex-col font-serif justify-center w-full gap-y-3 py-3"
            >
              <li className="w-full">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-white flex flex-row items-center w-full gap-4 border-gray-300 md:hover:bg-[#fff7ed] hover:font-bold hover:text-third  bg-opacity-70 rounded-full"
                >
                  <LayoutDashboard size={20} />

                  <span style={{ display: displaySide }}>General</span>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-white flex flex-row items-center w-full gap-4 border-gray-300 md:hover:bg-[#fff7ed] hover:font-bold hover:text-third  bg-opacity-70 rounded-full"
                >
                  <FileText size={20} />

                  <span style={{ display: displaySide }}>Reports</span>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-white flex flex-row items-center w-full gap-4 border-gray-300 md:hover:bg-[#fff7ed] hover:font-bold hover:text-third  bg-opacity-70 rounded-full"
                >
                  <Users size={20} />

                  <span style={{ display: displaySide }}>Clients</span>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-white flex flex-row items-center w-full gap-4 border-gray-300 md:hover:bg-[#fff7ed] hover:font-bold hover:text-third  bg-opacity-70 rounded-full"
                >
                  <Settings size={20} />

                  <span style={{ display: displaySide }}>Settings</span>
                </Link>
              </li>
            </ul>
          </div>

          <a className="text-white">
            <button className="px-4 py-2 text-white flex flex-row items-center w-full gap-4 border-gray-300 md:hover:bg-[#fff7ed] hover:font-bold hover:text-third  bg-opacity-70 rounded-full">
              <LogOut size={20} />
              <span style={{ display: displaySide }}>Logout</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
