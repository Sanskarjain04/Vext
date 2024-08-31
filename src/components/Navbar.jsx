import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#479d4f] dark:bg-gray-900 fixed w-full h-15 z-10 top-0 start-0 dark:border-gray-600 text-white ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img src="#" className="h-8" alt="logo"/> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            KRISHAK
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
          <Link
            to="/Disease"
            className="block py-2 px-8 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold"
          >
            Disease Detection
          </Link>
          <Link
            to="/Monitoring"
            className="block py-2 px-8 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold"
          >
            Intrusion Monitoring
          </Link>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mt-0"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-0 md:p-0 mt-0 font-medium bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/Why"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold"
              >
                Why
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
