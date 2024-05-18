/* eslint-disable no-unused-vars */
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="border-t border-black flex justify-between items-center px-4 md:px-8 py-2">
        <p className="font-bold md:text-2xl font-xl font-serif">H & B</p>
        <ul className="md:w-3/5 w-9/12 text-xs md:text-base flex md:space-x-8 space-x-4 items-center ">
          <li>
            &copy; {new Date().getFullYear()} By Suvendu. All rights reserved.
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/suvendu-kumar-sahoo-48584322a/"
              target="_blank"
            >
              <FaLinkedin size={22} />
            </a>
          </li>
          <li>
            <a href="https://github.com/suvendu021" target="_blank">
              <FaGithub size={22} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
