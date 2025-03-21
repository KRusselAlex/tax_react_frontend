import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Settings, LogOut, Bell } from "lucide-react";
import { logout } from "../services/authApi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [widthSide, setWidthSide] = useState("16rem");
  const [displaySide, setDisplaySide] = useState("flex");
  const [itemsAlign, setItemsAlign] = useState("start");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const mobileNavbar = () => {
    setWidthSide("4rem");
    setDisplaySide("none");
    setShow(false);
    setItemsAlign("center");
  };

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  const desktopNavbar = () => {
    setWidthSide("14rem");
    setDisplaySide("flex");
    setShow(true);
    setItemsAlign("start");
  };

  const navItems = [
    {
      path: "/dashboard",
      label: "General",
      icon: <LayoutDashboard size={20} />,
    },
    { path: "/dashboard/client", label: "Clients", icon: <Users size={20} /> },
    // {
    //   path: "/dashboard/reports",
    //   label: "Reports",
    //   icon: <FileText size={20} />,
    // },
    {
      path: "/dashboard/remind",
      label: "Reminder",
      icon: <Bell size={20} />,
    },

    {
      path: "/dashboard/setting",
      label: "Settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <div
      style={{ width: widthSide }}
      className="flex flex-col gap-3 min-h-screen bg-[#3d6d8c] text-white px-6"
    >
      <div className="flex items-center gap-2 border-b border-gray-400 pl-4 py-4 mt-3 justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl font-sans"
        >
          Jes.Group
        </Link>
        <button
          className="text-white"
          onClick={mobileNavbar}
          style={{ display: show ? "block" : "none" }}
        >
          {/* Close icon */}
        </button>
        <button
          className="text-white"
          onClick={desktopNavbar}
          style={{ display: !show ? "block" : "none" }}
        >
          {/* Open icon */}
        </button>
      </div>
      <div
        style={{ alignItems: itemsAlign }}
        className="flex flex-col h-full   justify-between py-5"
      >
        <ul
          style={{ alignItems: itemsAlign }}
          className="flex flex-col w-full gap-y-3 py-3"
        >
          {navItems.map((item) => (
            <li key={item.path} className="w-full">
              <Link
                to={item.path}
                className={`px-4 py-2 flex flex-row items-center w-full gap-4 rounded-full transition-all 
                  ${
                    location.pathname === item.path
                      ? "bg-[#fff7ed] font-medium text-third"
                      : "text-white hover:bg-[#fff7ed] hover:font-bold hover:text-third"
                  }`}
              >
                {item.icon}
                <span style={{ display: displaySide }}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="px-4 py-2 flex flex-row  items-center w-full gap-4 rounded-full text-white hover:bg-[#fff7ed] hover:font-bold hover:text-third"
          onClick={handleLogout}
        >
          <LogOut size={20} />
          <span style={{ display: displaySide }}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
