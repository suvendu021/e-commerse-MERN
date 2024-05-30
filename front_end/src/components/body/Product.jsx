/* eslint-disable no-unused-vars */
import React from "react";
import { useFetchAllProducts } from "../hooks/useFetchAllProducts";
import ProductsStucture from "./ProductsStucture";

const Product = () => {
  const productsData = useFetchAllProducts();

  const products = productsData?.data?.data;
  // if (products) console.log(products);
  if (!products) return null;
  return (
    <>
      <div className="flex justify-center">
        <button className="bg-black text-white px-4 py-2 rounded-lg mt-[7%]">
          + Create Product
        </button>
      </div>
      <div className="my-2 mx-2 text-xl font-semibold ">{`Total No. of Products: ${products.length}`}</div>
      <div className="md:grid justify-items-center md:grid-cols-3 md:gap-10">
        {products.map((product) => (
          <ProductsStucture key={product._id} productData={product} />
        ))}
      </div>
    </>
  );
};

export default Product;
