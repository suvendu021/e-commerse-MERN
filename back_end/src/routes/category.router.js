import { Router } from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.route("/create-category").post(createCategory);
categoryRouter.route("/get-all-categories").get(getAllCategories);

export { categoryRouter };
