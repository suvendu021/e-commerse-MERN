/* eslint-disable no-unused-vars */
import React from "react";

const EditProduct = () => {
  return (
    <div className="md:mt-[7%] mt-[20%] flex justify-center">
      <form
        encType="multipart/form-data"
        className="flex flex-col bg-slate-100 shadow md:p-20 p-3 w-11/12 md:w-8/12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="mt-3 font-semibold">ProductName</label>
        <input
          type="text"
          placeholder="eg:- Fridge..."
          className="px-4 py-2 "
        />
        <label className="mt-3 font-semibold">Category Name</label>
        <input
          type="text"
          placeholder="eg:- Home Accessories..."
          className="px-4 py-2"
        />
        <label className="mt-3 font-semibold">Price</label>
        <input
          type="number"
          min={"1"}
          placeholder="eg:- 10000..."
          className="px-4 py-2"
        />
        <label className="mt-3 font-semibold">ProductPhoto</label>
        <input type="file" accept="image/*" className="px-4 py-2" />
        <button className="bg-black text-white rounded-lg px-4 py-2 mt-3">
          Update
        </button>
        <p className="font-semibold text-red-500"></p>
      </form>
    </div>
  );
};

export default EditProduct;
