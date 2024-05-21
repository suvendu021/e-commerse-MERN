import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { createProduct } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter
  .route("/create-product")
  .post(upload.single("photo"), createProduct);

export { productRouter };
