/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Validation } from "../utils/Validation";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import axios from "axios";
import { BASEURL } from "../utils/Constant";

const LogIn = () => {
  const [toggleSignIn, setToggleSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMSG, setErrorMSG] = useState(null);
  const signInBtnHandle = () => {
    setToggleSignIn(!toggleSignIn);
  };

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);

  const handleLogIn = async () => {
    const message = toggleSignIn
      ? Validation(null, emailRef?.current?.value, passwordRef?.current?.value)
      : Validation(
          usernameRef?.current?.value,
          emailRef?.current?.value,
          passwordRef?.current?.value
        );
    if (message) {
      setErrorMSG(`*${message}`);
      return;
    }
    setErrorMSG("");
    if (toggleSignIn) {
      try {
        const userData = await axios.post(`${BASEURL}/user/login-user`, {
          email: emailRef?.current?.value,
          passWord: passwordRef?.current?.value,
        });
        console.log(userData);
        toast.success("successfully login");
      } catch (error) {
        console.error("Login error:", error);

        // Handle errors from the backend API

        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setErrorMSG(`*${error.response.data.error}`);
        } else {
          setErrorMSG("*An error occurred. Please try again later.");
        }
      }
    } else {
      try {
        await axios.post(`${BASEURL}/user/register-user`, {
          userName: usernameRef?.current?.value,
          email: emailRef?.current?.value,
          passWord: passwordRef?.current?.value,
          phone: phoneRef?.current?.value,
          address: addressRef?.current?.value,
        });
        setErrorMSG("successfully account created, Click SignIn");
      } catch (error) {
        console.error("SignUp error:", error);

        // Handle errors from the backend API

        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setErrorMSG(`*${error.response.data.error}`);
        } else {
          setErrorMSG(`*An error occurred. Please try again later.`);
        }
      }
    }
  };

  return (
    <div className="md:my-[9%] my-[20%]">
      <form
        className="py-10 md:px-12 px-6 flex flex-col md:w-6/12 shadow-lg w-4/5 bg-gray-200  mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="text-xl md:text-3xl font-mono font-bold text-center">
          {`${toggleSignIn ? "Welcome Back" : "Welcome To H & B"}`}
        </h2>
        {!toggleSignIn ? (
          <>
            <label className="mt-4">Username</label>
            <input
              ref={usernameRef}
              type="text"
              required
              placeholder="eg: Example_01"
              className="px-4 py-2 border border-gray-500 rounded-md"
            />
            <label className="mt-2">PhoneNumber</label>
            <input
              ref={phoneRef}
              type="number"
              required
              placeholder="eg: 0123456789"
              className="px-4 py-2 border border-gray-500 rounded-md"
            />

            <label className="mt-2">Address</label>
            <input
              ref={addressRef}
              type="text"
              required
              placeholder="eg: Odisha, India"
              className="px-4 py-2 border border-gray-500 rounded-md"
            />
          </>
        ) : null}

        <label className="mt-2">Email</label>
        <input
          ref={emailRef}
          type="email"
          required
          placeholder="eg: example@user.com"
          className="px-4 py-2 border border-gray-500 rounded-md"
        />
        <label className="mt-2">Password</label>
        <div className="flex justify-end items-center">
          <input
            ref={passwordRef}
            type={`${showPassword ? "text" : "passWord"}`}
            required
            placeholder="eg: Exam@12345"
            className="px-4 py-2 border border-gray-500 rounded-md w-full"
          />
          <div className="absolute p-2 ">
            {showPassword ? (
              <BiShow
                size={22}
                className="cursor-pointer"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            ) : (
              <BiHide
                className="cursor-pointer"
                size={22}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            )}
          </div>
        </div>

        <button
          className="bg-black text-white font-mono font-semibold rounded-md px-4 py-2 mt-6"
          onClick={handleLogIn}
        >
          {toggleSignIn ? "SignIn" : "SignUp"}
        </button>
        <p className="text-red-500 px-2 font-semibold">{errorMSG}</p>
        <div className="text-blue-500 flex font-serif mt-4 justify-between px-2">
          <p>Forgot Password?</p>
          <p className="cursor-pointer" onClick={signInBtnHandle}>
            {toggleSignIn ? "SignUp" : "SignIn"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
