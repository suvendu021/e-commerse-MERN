/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const CategoryStructure = ({ category }) => {
  return (
    <>
      <button className="px-5 py-2  w-fit bg-slate-100 rounded-md shadow my-5 mx-2 font-bold whitespace-nowrap">
        {category.categoryName}
      </button>
    </>
  );
};

export default CategoryStructure;
