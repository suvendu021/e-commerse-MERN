/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import axios from "axios";
import { BASEURL } from "../utils/Constant";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const emailRef = useRef(null);
  const newPasswordRef = useRef(null);
  const answerRef = useRef(null);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMSG, setErrorMSG] = useState(null);

  const handleResetPassword = async () => {
    try {
      await axios.post(`${BASEURL}/user/reset-password`, {
        email: emailRef?.current?.value,
        securityAnswer: answerRef?.current?.value,
        newPassWord: newPasswordRef?.current?.value,
      });
      navigate("/");
      toast.success("successfully passWord is chaged");
    } catch (error) {
      console.log("forgot password error", error.response);

      if (error.response && error.response.data && error.response.data.error) {
        setErrorMSG(`*${error.response.data.error}`);
      } else {
        setErrorMSG(`*An error occurred. Please try again later.`);
      }
    }
  };
  return (
    <>
      <div className="md:mt-[9%] mt-[20%]">
        <form
          className="py-10 md:px-12 px-6 flex flex-col md:w-6/12 shadow-lg w-4/5 bg-gray-200  mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2 className="text-xl md:text-3xl font-mono font-bold text-center">
            Reset Password
          </h2>

          <label className="mt-2">Email</label>
          <input
            ref={emailRef}
            type="email"
            required
            placeholder="eg: example@user.com"
            className="px-4 py-2 border border-gray-500 rounded-md"
          />
          <label className="mt-2">Security quetion</label>
          <input
            type="text"
            ref={answerRef}
            required
            placeholder="Enter your childhood name"
            className="px-4 py-2 border border-gray-500 rounded-md"
          />
          <label className="mt-2">Password</label>
          <div className="flex justify-end items-center">
            <input
              ref={newPasswordRef}
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
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
          <p className="text-red-500 px-2 font-semibold">{errorMSG}</p>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
