/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "../utils/Constant";

const useFetchAllProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    const data = await axios.get(`${BASEURL}/product/get-all-products`);
    // console.log(data);
    setProducts(data);
  };
  return products;
};

export { useFetchAllProducts };
