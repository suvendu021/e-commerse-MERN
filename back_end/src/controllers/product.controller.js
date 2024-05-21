import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadToCloudinary } from "../utils/Cloudinary.js";
import { Product } from "../models/product.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Category } from "../models/category.model.js";

// create product
const createProduct = AsyncHandler(async (req, res) => {
  const { productName, price, category } = req.body;

  if ([productName, price, category].some((field) => field.trim() === "")) {
    return new ApiError(400, "every field need to be filled");
  }

  const CategoryPresent = Category.findOne({ categogyName: category });
  if (!CategoryPresent) {
    throw new ApiError(
      400,
      "There is no such category plz first create category"
    );
  }

  const categoryId = CategoryPresent._id;

  const ProductPresent = await Product.findOne({
    $and: [{ productName }, { category }],
  });
  if (ProductPresent) {
    throw new ApiError(400, "product is already present");
  }

  const photoPath = req.file?.path;

  if (!photoPath) {
    throw new ApiError(400, "photo need to be upload");
  }

  const result = await uploadToCloudinary(photoPath);
  if (!result) {
    throw new ApiError(500, "error during productPhoto upload ");
  }

  const createdProduct = await Product.create({
    productName: productName,
    price: price,
    categoryId: categoryId,
    productPhoto: result.url,
  });

  if (!createdProduct) {
    throw new ApiError(500, "some error occur during creating product");
  }

  const product = await Product.findById(createProduct._id);

  return res
    .status(200)
    .json(new ApiResponse(200, "successfully product created ", product));
});

export { createProduct };
