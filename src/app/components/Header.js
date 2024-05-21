"use client";
import Link from "next/link";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between w-full h-16 p-4 bg-gray-100 rounded-b-lg shadow-md">
      <div className="flex items-center text-center justify-center">
        <div className="mr-2">
          <FaReact size={24} />
        </div>
        <div className="hidden sm:block text-xl font-bold text-black">
          NextJS
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="sm:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        {menuOpen && (
          <div className="md:hidden absolute top-16 right-4 z-10 p-4 bg-white rounded shadow-md">
            <ul className="text-gray-800">
              <li className="mb-2">
                <a
                  href="/pages/login"
                  className="block px-2 py-1 rounded hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/pages/register"
                  className="block px-2 py-1 rounded-lg hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        )}
        <Link href="/pages/login" passHref>
          <button className="hidden sm:inline-block mr-2 px-4 py-2 rounded-lg  bg-black hover:bg-[#0a091d] text-white">
            Login
          </button>
        </Link>
        <Link href="/pages/register" passHref>
          <button className="hidden sm:inline-block px-4 py-2 rounded-lg text-black border-black border-[1px] hover:text-white hover:bg-gray-900">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
