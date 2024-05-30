/* eslint-disable no-unused-vars */
import React from "react";

const AdminInfo = () => {
  const admin = localStorage.getItem("userInfo");
  const adminInfo = JSON.parse(admin);
  // console.log(adminInfo);
  return (
    <div className="md:mt-[7%] mt-[20%] flex flex-col justify-center items-center">
      <p className="md:text-4xl text-2xl px-4 py-2 rounded-lg font-mono font-bold shadow w-fit bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        Admin Info
      </p>

      <p className="font-serif md:text-3xl font-semibold mt-7 text-green-400">{`Name: ${adminInfo.userName}`}</p>
      <p className="font-serif md:text-xl font-semibold text-blue-500">{`Address: ${adminInfo.address}`}</p>
      <p className="font-serif md:text-xl font-semibold text-orange-400">{`PhoneNo: ${adminInfo.phone}`}</p>
      <p className="font-serif md:text-xl font-semibold text-pink-400">{`Email: ${adminInfo.email}`}</p>
    </div>
  );
};

export default AdminInfo;
