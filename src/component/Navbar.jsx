import React from "react";
import DigitalIndia from "../images/digital_india.png";

const Navbar = () => {
  return (
    <nav className="bg-red-200 border-red-200 px-2 sm:px-4 py-2.5 rounded-none dark:bg-red-200">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img
            src={DigitalIndia}
            className="mr-3 ml-16 h-9 sm:h-14"
            alt="Dgita Logo"
          />
          <span className="self-center mt-2 text-3xl font-semibold whitespace-nowrap dark:text-black">
            Dgita
          </span>
        </a>
        <div className="flex md:order-3">
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none inline-flex focus:ring-blue-300 font-medium rounded-none text-sm px-5 py-2.5 mr-3 md:mr-0 dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block text-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Get Details
          </button>

          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-black border-b border-black hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 md:dark:hover:text-black dark:text-black dark:hover:bg-black dark:hover:text-black md:dark:hover:bg-transparent dark:border-black"
              >
                Home{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-black border-b border-black hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 md:dark:hover:text-black dark:text-black dark:hover:bg-black dark:hover:text-black md:dark:hover:bg-transparent dark:border-black"
              >
                Services{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-black border-b border-black hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 md:dark:hover:text-black dark:text-black dark:hover:bg-black dark:hover:text-black md:dark:hover:bg-transparent dark:border-black"
              >
                Portfolio{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-black border-b border-black hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 md:dark:hover:text-black dark:text-black dark:hover:bg-black dark:hover:text-black md:dark:hover:bg-transparent dark:border-black"
            >
              Blogs{" "}
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-black border-b border-black hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 md:dark:hover:text-black dark:text-black dark:hover:bg-black dark:hover:text-black md:dark:hover:bg-transparent dark:border-black"
              >
                Pages{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
