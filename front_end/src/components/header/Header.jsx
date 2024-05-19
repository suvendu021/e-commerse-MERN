/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { TfiAlignCenter } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="flex  bg-white z-40  w-full px-4 py-2 justify-between items-center shadow-lg sticky top-0">
        <p className="font-serif font-bold text-2xl">H & B</p>
        <div>
          <div className="md:hidden">
            {showMenu ? (
              <div
                className="cursor-pointer flex items-center justify-end"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <TfiAlignCenter size={18} />
              </div>
            ) : (
              <div
                className="cursor-pointer flex items-center justify-end"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <TfiClose size={18} />
              </div>
            )}
          </div>
          <ul
            className={`block md:flex md:space-x-8 font-semibold ${
              showMenu ? "hidden" : ""
            }`}
          >
            <li>
              <Link to={"/"} className="focus:text-gray-400">
                Sign Up
              </Link>
            </li>
            <li>
              <Link className="focus:text-gray-400" to={"/home"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="focus:text-gray-400" to={"/contact"}>
                Contact us
              </Link>
            </li>
            <li>
              <Link className="focus:text-gray-400" to={"/about"}>
                About us
              </Link>
            </li>
            <li>
              <Link className="focus:text-gray-400" to={"/cart"}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
