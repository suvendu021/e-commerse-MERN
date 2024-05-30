/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Link
        className="flex mt-[20%] md:mt-[8%] justify-center items-center font-mono font-bold text-2xl"
        to={"/home"}
      >
        Your Cart is Empty 🥲 !!!
      </Link>
    </>
  );
};

export default Cart;
