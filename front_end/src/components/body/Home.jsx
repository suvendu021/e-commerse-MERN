/* eslint-disable no-unused-vars */
import React from "react";
import { useFetchAllProducts } from "../hooks/useFetchAllProducts";
import ProductsStructure from "./ProductsStucture";

const Home = () => {
  const productsInfo = useFetchAllProducts();
  // if (productsInfo) console.log(productsInfo?.data?.data);
  const products = productsInfo?.data?.data;
  if (!productsInfo) return null;
  return (
    <>
      <div className="grid mt-[5%]  md:grid-cols-4 justify-items-center py-4">
        {products.map((product) => (
          <ProductsStructure key={product?._id} productData={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
