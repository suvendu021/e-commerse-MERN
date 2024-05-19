/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex justify-center h-screen space-y-2 items-center flex-col">
        <h2 className="text-4xl font-bold font-mono">404</h2>
        <p className="text-xl font-semibold">Oops Page Not Found</p>
        <button className="px-4 py-2 border border-black" type="button">
          <Link to={"/home"}>Go Back</Link>
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
