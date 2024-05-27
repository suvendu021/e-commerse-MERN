/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TfiAlignCenter } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import { BASEURL } from "../utils/Constant";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userName = localStorage.getItem("username");
  const cookie = new Cookies();
  const accessToken = cookie.get("accessToken");
  const navigate = useNavigate();
  const axiosApi = axios.create({
    baseURL: `${BASEURL}`,
    withCredentials: true,
  });

  const role = localStorage.getItem("role");
  const handleLogOut = async () => {
    try {
      await axiosApi.post(
        `/user/logout-user`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      cookie.remove("accessToken");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      localStorage.removeItem("userInfo");
      navigate("/");
      toast.success("successfully logout");
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   if (userName) {
  //     navigate("/home");
  //   }
  // }, []);

  return (
    <div className="flex bg-white z-40 w-full justify-between px-4 py-2 items-center shadow-lg sticky top-0">
      <div className="font-serif whitespace-nowrap font-bold text-2xl">
        H & B
      </div>
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
          className={`block text-sm whitespace-nowrap md:flex items-center md:space-x-8 font-semibold ${
            showMenu ? "hidden" : ""
          }`}
        >
          <li>
            <Link className="focus:text-gray-400" to={"/"}>
              {!accessToken ? "SignUp" : ""}
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
          {role == 1 && accessToken && (
            <li>
              <Link className="focus:text-gray-400" to={"/admin-panel/admin"}>
                AdminPanel
              </Link>
            </li>
          )}

          {accessToken && (
            <li className="flex items-center">
              <FaRegUserCircle size={22} className="mr-1" />
              {userName}
            </li>
          )}

          {accessToken && (
            <li className="flex cursor-pointer" onClick={handleLogOut}>
              LogOut
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
