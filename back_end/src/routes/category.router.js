import { Router } from "express";
import { createCategory } from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.route("/create-product").post(createCategory);

export { categoryRouter };
