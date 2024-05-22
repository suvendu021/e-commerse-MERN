import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  createProduct,
  getAllProducts,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter
  .route("/create-product")
  .post(upload.single("photo"), createProduct);

productRouter.route("/get-all-products").get(getAllProducts);

export { productRouter };
