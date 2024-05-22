import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadToCloudinary } from "../utils/Cloudinary.js";
import { Product } from "../models/product.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Category } from "../models/category.model.js";

// create product
const createProduct = AsyncHandler(async (req, res) => {
  const { productName, price, categoryName } = req.body;

  if (
    [productName, price, categoryName].some((field) => field?.trim() === "")
  ) {
    return new ApiError(400, "every field need to be filled");
  }

  const CategoryPresent = await Category.findOne({ categoryName });
  if (!CategoryPresent) {
    throw new ApiError(
      400,
      "There is no such category plz first create category"
    );
  }

  const categoryId = CategoryPresent._id;

  const ProductPresent = await Product.findOne({
    $and: [{ productName }, { categoryId }],
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
    productName,
    price,
    categoryId,
    productPhoto: result.url,
  });

  if (!createdProduct) {
    throw new ApiError(500, "some error occur during creating product");
  }

  const product = await Product.findById(createdProduct._id);

  return res
    .status(200)
    .json(new ApiResponse(200, "successfully product created ", product));
});

//get all products
const getAllProducts = AsyncHandler(async (req, res) => {
  const allProducts = await Product.find();

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "successfully get all products",
        allProducts ? allProducts : "no product found"
      )
    );
});

export { createProduct, getAllProducts };
