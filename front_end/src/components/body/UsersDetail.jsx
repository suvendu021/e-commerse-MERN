/* eslint-disable no-unused-vars */
import React from "react";
import { useFetchAllUsers } from "../hooks/useFetchAllUsers";
import UserInfoStructure from "./UserInfoStructure";

const UsersDetail = () => {
  const data = useFetchAllUsers();
  const usersArray = data?.data?.data;
  // if (usersArray) console.log(usersArray);
  if (!usersArray) return null;
  return (
    <>
      <div className=" mt-12 text-xl font-semibold ">{`Total No. of Users: ${usersArray.length}`}</div>
      <div className="md:grid md:gap-5 md:grid-cols-2 justify-items-center">
        {usersArray.map((user) => (
          <UserInfoStructure key={user._id} userData={user} />
        ))}
      </div>
    </>
  );
};

export default UsersDetail;
