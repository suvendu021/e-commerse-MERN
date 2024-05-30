/* eslint-disable no-unused-vars */
import React from "react";

import { Link, Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <div className="flex">
        <div className="w-3/12 fixed space-y-2 border shadow bg-slate-100 font-semibold ">
          <div className="px-4 py-3 border-b border-black ">
            <Link
              className="cursor-pointer focus:text-red-400"
              to={"/admin-panel/admin"}
            >
              Admin
            </Link>
          </div>
          <div className="px-4 py-3 border-b border-black ">
            <Link
              className="cursor-pointer focus:text-red-400"
              to={"/admin-panel/users"}
            >
              Users
            </Link>
          </div>
          <div className="px-4 py-3 border-b cursor-pointer border-black">
            <Link
              className="cursor-pointer focus:text-red-400"
              to={"/admin-panel/category"}
            >
              Category
            </Link>
          </div>
          <div className="px-4 py-3 border-b border-black ">
            <Link
              className="cursor-pointer focus:text-red-400"
              to={"/admin-panel/product"}
            >
              Products
            </Link>
          </div>
        </div>
        <div className="w-9/12 ml-[25%] px-4 py-2 bg-scroll ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
