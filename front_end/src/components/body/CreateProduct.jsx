/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import axios from "axios";
import { BASEURL } from "../utils/Constant";
import { toast } from "react-hot-toast";
import LoadingEffect from "../utils/LoadingEffect";

const CreateProduct = () => {
  const [errorMSG, setErrorMSG] = useState(null);
  const [loading, setLoading] = useState(false);
  const productNameRef = useRef(null);
  const categoryNameRef = useRef(null);
  const priceRef = useRef(null);
  const productPhotoRef = useRef(null);
  const handleCreateProduct = async () => {
    setLoading(true);
    try {
      await axios.post(
        `${BASEURL}/product/create-product`,
        {
          productName: productNameRef?.current?.value,
          price: priceRef?.current?.value,
          categoryName: categoryNameRef?.current?.value,
          photo: productPhotoRef?.current?.files[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("successfully Product created");
    } catch (error) {
      // console.log(`*${error?.response?.data?.error}`);
      setErrorMSG(
        `*${error?.response?.data?.error}` || "Some intrnal error occur"
      );
      toast.error(
        `${error?.response?.data?.error}` ||
          "some error occur during Product created"
      );
    }
    setLoading(false);
    productNameRef.current.value = null;
    priceRef.current.value = null;
    categoryNameRef.current.value = null;
    productPhotoRef.current.files[0] = null;
  };

  return (
    <>
      {loading && <LoadingEffect />}
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
            ref={productNameRef}
            type="text"
            placeholder="eg:- Fridge..."
            className="px-4 py-2 "
          />
          <label className="mt-3 font-semibold">Category Name</label>
          <input
            ref={categoryNameRef}
            type="text"
            placeholder="eg:- Home Accessories..."
            className="px-4 py-2"
          />
          <label className="mt-3 font-semibold">Price</label>
          <input
            ref={priceRef}
            type="number"
            min={"1"}
            placeholder="eg:- 10000..."
            className="px-4 py-2"
          />
          <label className="mt-3 font-semibold">ProductPhoto</label>
          <input
            ref={productPhotoRef}
            type="file"
            accept="image/*"
            className="px-4 py-2"
          />
          <button
            className="bg-black text-white rounded-lg px-4 py-2 mt-3"
            onClick={handleCreateProduct}
          >
            create
          </button>
          <p className="font-semibold text-red-500">{errorMSG}</p>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
