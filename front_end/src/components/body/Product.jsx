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
    <div className="md:grid ml-16 md:grid-cols-3 md:gap-12">
      {products.map((product) => (
        <ProductsStucture key={product._id} productData={product} />
      ))}
    </div>
  );
};

export default Product;
