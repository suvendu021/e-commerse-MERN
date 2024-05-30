/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "../utils/Constant";

const useFetchAllCategories = () => {
  const [allCategories, setAllCategories] = useState(null);
  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    const categories = await axios.get(
      `${BASEURL}/category/get-all-categories`
    );
    // console.log(categories);
    setAllCategories(categories);
  };

  return allCategories;
};

export { useFetchAllCategories };
