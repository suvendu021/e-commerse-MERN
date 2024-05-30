/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { useFetchAllCategories } from "../hooks/useFetchAllCategories";
import CategoryStructure from "./CategoryStructure";
import axios from "axios";
import { BASEURL } from "../utils/Constant";
import { toast } from "react-hot-toast";

const Category = () => {
  const [catagoryData, setCategoryData] = useState(null);
  const categoriesInfo = useFetchAllCategories();
  useEffect(() => {
    if (categoriesInfo) {
      setCategoryData(categoriesInfo?.data?.data);
    }
  }, [categoriesInfo]);

  // if (categories) console.log(categoriesInfo?.data?.data);
  const categoryRef = useRef(null);
  const handleCreateCategory = async () => {
    try {
      await axios.post(`${BASEURL}/category/create-category`, {
        categoryName: categoryRef?.current?.value,
      });
      const response = await axios.get(
        `${BASEURL}/category/get-all-categories`
      );
      setCategoryData(response.data.data);
      categoryRef.current.value = "";
      toast.success("successfully category created");
    } catch (error) {
      // console.log(error?.response?.data?.error);
      toast.error(error?.response?.data?.error);
    }
  };
  return (
    <>
      <div className="flex mt-12 justify-center  items-center ">
        <input
          ref={categoryRef}
          type="text"
          placeholder="Enter Category Name"
          className=" px-3 py-2 rounded-l-lg bg-slate-200"
        />
        <button
          className="px-3 w-fit py-2 bg-black text-white rounded-r-lg  shadow "
          onClick={handleCreateCategory}
        >
          Create
        </button>
      </div>

      <div className=" md:grid grid-cols-4  mt-20 ">
        {catagoryData &&
          catagoryData.map((category) => (
            <CategoryStructure key={category._id} category={category} />
          ))}
      </div>
    </>
  );
};

export default Category;
