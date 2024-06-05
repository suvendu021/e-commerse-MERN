/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProductsStucture = ({ productData }) => {
  const product_name = productData?.productName;
  const product_photo = productData?.productPhoto;
  const product_price = productData?.price;
  return (
    <div className="w-fit px-6 py-4 mt-6  shadow-md bg-slate-100 rounded-md">
      <img className="w-32" src={`${product_photo}`} alt="product_photo" />
      <div className="mt-2">
        <div className="text-lg font-bold">{`${product_name}`}</div>
        <div className="font-semibold">{`Price:-${product_price} rs/-`}</div>
      </div>
    </div>
  );
};

export default ProductsStucture;
