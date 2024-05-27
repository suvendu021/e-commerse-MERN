/* eslint-disable no-unused-vars */
import axios from "axios";
import { BASEURL } from "../utils/Constant";
import { useEffect, useState } from "react";

const useFetchAllUsers = () => {
  const [usersData, setUsersData] = useState(null);
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    const data = await axios.get(`${BASEURL}/user/get-all-users`);
    // console.log(data);
    setUsersData(data);
  };
  return usersData;
};

export { useFetchAllUsers };
