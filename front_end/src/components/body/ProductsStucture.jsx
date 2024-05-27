/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProductsStucture = ({ productData }) => {
  const product_name = productData?.productName;
  const product_photo = productData?.productPhoto;
  const product_price = productData?.price;
  return (
    <div className="w-fit px-4 py-2 mt-6  shadow-md bg-slate-100 rounded-md">
      <img className="w-32" src={`${product_photo}`} alt="product_photo" />
      <div className="mt-2">
        <div className="font-mono md:text-base text-sm">{`${product_name}`}</div>
        <div className="font-mono md:text-base text-sm">{`Rs:-${product_price}`}</div>
      </div>
    </div>
  );
};

export default ProductsStucture;
