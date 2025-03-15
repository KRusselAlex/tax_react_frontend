import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-primary">
        <div className=" text-white flex justify-between items-center py-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-sm flex gap-3 text-right">
            <p>+23746002815</p>
            <p>kouawouee@gmail.com</p>
          </div>
        </div>
      </div>

      <nav className="bg-[#f8f7f1] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-gray-800">jes.group</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Accueil
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Contact
              </a>
            </div>

            {/* Contact Button */}
            <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Contact Us
            </button>

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
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Accueil
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>
            <button className="w-full bg-blue-500 text-white px-4 py-2 mt-2 rounded-full hover:bg-blue-600">
              Contacter Nous
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
