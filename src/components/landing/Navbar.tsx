import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Logo from "../Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div>
      <div className="bg-primary">
        <div className="text-white flex justify-between items-center py-3 max-w-[110em] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-xs  md:text-lg flex flex-col md:flex-row gap-2 text-right">
            <p>+1 514-217-8361</p>
            <p>leontitne.toumno@hec.com</p>
          </div>
        </div>
      </div>

      <nav className="bg-secondaryColor w-full ">
        <div className="max-w-[110em] mx-auto px-4 sm:px-6 py-6 lg:px-8">
          <div className="flex \ justify-between  items-center">
            {/* Logo */}
            <h1 className="text-lg md:text-2xl 2xl:text-4xl font-bold text-gray-800">
              <Logo />
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 xl:mt-2 md:text-lg  xl:text-xl 2x:text-2xl">
              <a href="#home" className="text-gray-700  hover:text-blue-500">
                Home
              </a>
              <a href="#service" className="text-gray-700 hover:text-blue-500">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-500">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </a>
            </div>

            {/* Contact/Dashboard Button */}
            <a
              href={isAuthenticated ? "/dashboard" : "#contact"}
              className="hidden md:block bg-primary text-lg text-white px-4 py-2 rounded-full hover:bg-buttonHover"
            >
              {isAuthenticated ? "Dashboard" : "Contact Us"}
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <a
              href="#home"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#service"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>
            <button className="flex mx-3 ">
              <a
                href={isAuthenticated ? "/dashboard" : "#contact"}
                className="w-full block text-center bg-third text-white px-4 py-2 mt-2 rounded-full hover:bg-buttonHover"
              >
                {isAuthenticated ? "Dashboard" : "Contacter Nous"}
              </a>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
