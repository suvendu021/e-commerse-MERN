import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { Category } from "../models/category.model.js";

//create category
const createCategory = AsyncHandler(async (req, res) => {
  const { categoryName } = req.body;
  if (!categoryName) {
    throw new ApiError(400, "please name the category");
  }

  const presentCategory = await Category.findOne({ categogyName });
  if (presentCategory) {
    throw new ApiError(400, "category already exist");
  }

  const createdCategory = await Category.create({
    categogyName: categoryName,
  });

  if (!createdCategory) {
    throw new ApiError(500, "some error occur during creation of category");
  }

  const category = Category.findById(createdCategory._id);

  return res
    .status(200)
    .json(new ApiResponse(200, "successfully category created"), category);
});

export { createCategory };
