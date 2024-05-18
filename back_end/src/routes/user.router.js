import { Router } from "express";
import {
  registerUser,
  signInUser,
  signOutUser,
  testing,
} from "../controllers/user.controller.js";
import { verifyJWT, isAdmin } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register-user").post(registerUser);
userRouter.route("/login-user").post(signInUser);
userRouter.route("/logout-user").post(signOutUser);

//route for testing
userRouter.route("/test").get(verifyJWT, isAdmin, testing);

export { userRouter };
