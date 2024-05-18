/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBold, FaHandPointer, FaTimes } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="flex border-b border-black w-full px-4 py-2 justify-between items-center">
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
                <FaBars size={18} />
              </div>
            ) : (
              <div
                className="cursor-pointer flex items-center justify-end"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <FaTimes size={18} />
              </div>
            )}
          </div>
          <ul
            className={`block  md:flex md:space-x-8 font-semibold ${
              showMenu ? "hidden" : ""
            }`}
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact us</Link>
            </li>
            <li>
              <Link to={"/about"}>About us</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
