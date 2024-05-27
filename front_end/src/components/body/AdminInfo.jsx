/* eslint-disable no-unused-vars */
import React from "react";

const AdminInfo = () => {
  const admin = localStorage.getItem("userInfo");
  const adminInfo = JSON.parse(admin);
  console.log(adminInfo);
  return <div>hello</div>;
};

export default AdminInfo;
