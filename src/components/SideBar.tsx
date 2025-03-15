import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [widthSide, setWidthSide] = useState("18rem");
  const [displaySide, setDisplaySide] = useState("flex");
  const [itemsAlign, setItemsAlign] = useState("start");
  const [show, setShow] = useState(true);

  const history = useNavigate();


  const mobileNavbar = () => {
    setWidthSide("4rem");
    setDisplaySide("none");
    setShow(false);
    setItemsAlign("center");
  };

  const desktopNavbar = () => {
    setWidthSide("18rem");
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
      className="flex flex-col gap-3   px-6"
    >
      <div className="flex items-center gap-2 border-2 px-4 py-2 rounded-xl justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold font-sans">
          Jes.Group
         
        </Link>
        <button
          className="text-[#343434] hover:text-primaryColor"
          onClick={mobileNavbar}
          style={{ display: show ? "block" : "none" }}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM13.79 15C14.08 15.29 14.08 15.77 13.79 16.06C13.64 16.21 13.45 16.28 13.26 16.28C13.07 16.28 12.88 16.21 12.73 16.06L9.2 12.53C8.91 12.24 8.91 11.76 9.2 11.47L12.73 7.94C13.02 7.65 13.5 7.65 13.79 7.94C14.08 8.23 14.08 8.71 13.79 9L10.79 12L13.79 15Z"
              fill="#292D32"
            />
          </svg>
        </button>
        <button
          className="text-[#343434] hover:text-primaryColor z-10"
          onClick={desktopNavbar}
          style={{ display: !show ? "block" : "none" }}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z"
              fill="#292D32"
            />
          </svg>
        </button>
      </div>

      <div
        style={{ alignItems: itemsAlign }}
        className="flex flex-col h-full justify-between  py-5 text-gray-900"
      >
        <div>
          <h3
            style={{ display: displaySide }}
            className="text-gray-500 font-sans"
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
                className="px-4 py-2 text-gray-900 flex flex-row items-center w-full gap-4 border-gray-300 md:hover:bg-[#fff7ed] hover:font-bold hover:text-primaryColor bg-opacity-70 rounded-inputRadius"
              >
                <span>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15 18H9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <span style={{ display: displaySide }}>General</span>
              </Link>
            </li>
            <ul
              style={{ alignItems: itemsAlign }}
              className="flex flex-col font-serif justify-center w-full gap-y-3 py-3"
            >
              <li className="w-full">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-gray-900 flex flex-row items-center w-full gap-4 border-gray-300 md:hover:bg-[#fff7ed] hover:font-bold hover:text-primaryColor bg-opacity-70 rounded-inputRadius"
                >
                  <span>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M15 18H9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span style={{ display: displaySide }}>General</span>
                </Link>
              </li>

              <li className="w-full">
                <Link
                  to="/profile"
                  className="px-4 py-2 text-gray-900 flex flex-row items-center w-full gap-4 border-gray-300 md:hover:bg-[#fff7ed] hover:font-bold hover:text-primaryColor bg-opacity-70 rounded-inputRadius"
                >
                  <span>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM13.79 15C14.08 15.29 14.08 15.77 13.79 16.06C13.64 16.21 13.45 16.28 13.26 16.28C13.07 16.28 12.88 16.21 12.73 16.06L9.2 12.53C8.91 12.24 8.91 11.76 9.2 11.47L12.73 7.94C13.02 7.65 13.5 7.65 13.79 7.94C14.08 8.23 14.08 8.71 13.79 9L10.79 12L13.79 15Z"
                        fill="#292D32"
                      />
                    </svg>
                  </span>
                  <span style={{ display: displaySide }}>Profile</span>
                </Link>
              </li>

              <li className="w-full">
                <Link
                  to="/settings"
                  className="px-4 py-2 text-gray-900 flex flex-row items-center w-full gap-4 border-gray-300 md:hover:bg-[#fff7ed] hover:font-bold hover:text-primaryColor bg-opacity-70 rounded-inputRadius"
                >
                  <span>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM13.79 15C14.08 15.29 14.08 15.77 13.79 16.06C13.64 16.21 13.45 16.28 13.26 16.28C13.07 16.28 12.88 16.21 12.73 16.06L9.2 12.53C8.91 12.24 8.91 11.76 9.2 11.47L12.73 7.94C13.02 7.65 13.5 7.65 13.79 7.94C14.08 8.23 14.08 8.71 13.79 9L10.79 12L13.79 15Z"
                        fill="#292D32"
                      />
                    </svg>
                  </span>
                  <span style={{ display: displaySide }}>Settings</span>
                </Link>
              </li>
            </ul>
          </ul>
        </div>

        <div>
          <h3
            style={{ display: displaySide }}
            className="text-gray-500 font-sans"
          >
            Admin
          </h3>
          <ul
            style={{ alignItems: itemsAlign }}
            className="flex flex-col font-serif justify-center w-full gap-y-3 py-3"
          >
            {/* Admin Links */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
