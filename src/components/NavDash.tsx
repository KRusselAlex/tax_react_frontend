import { useState } from "react";
import { Bell, LogOut } from "lucide-react";
import { logout } from "../services/authApi";
import { useNavigate } from "react-router-dom";

interface DashboardNavbarProps {
  title: string;
  description: string;
}

export default function DashboardNavbar({
  title,
  description,
}: DashboardNavbarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full flex justify-center">
      <nav className="flex items-center py-4 w-full max-w-6xl bg-secondaryColor justify-between">
        <div>
          <h1 className="text-lg md:text-4xl text-primaryColor">{title}</h1>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        <div className="flex items-center gap-4">
          <div>
            {/* <div className="relative">
              <input
                className="appearance-none border pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-full w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search..."
              />
              <div className="absolute right-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 mr-3 h-4 w-4 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div> */}
          </div>
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900" />
          <span className="cursor-pointer" onClick={handleProfileClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              width="30"
              height="30"
            >
              <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zM12 14c-2.5 0-7.5 1.5-7.5 4.5v2h15v-2c0-3-5-4.5-7.5-4.5z" />
            </svg>
          </span>
          <LogOut
            className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700"
            onClick={handleLogout}
          />
        </div>
      </nav>

      {/* Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            {/* Add the user's information here */}
            <div className="space-y-2">
              <p>
                <strong>Name:</strong>{" "}
                {localStorage.getItem("username")
                  ? localStorage.getItem("username")
                  : "No name provided"}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {localStorage.getItem("email")
                  ? localStorage.getItem("email")
                  : "No email provided"}
              </p>
              {/* Add more fields as necessary */}
            </div>
            <button
              className="mt-4 text-white bg-red-500 py-2 px-4 rounded-full"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
