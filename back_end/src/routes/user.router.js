import { Router } from "express";
import {
  registerUser,
  signInUser,
  signOutUser,
  testing,
  forgotPassword,
} from "../controllers/user.controller.js";
import { verifyJWT, isAdmin } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register-user").post(registerUser);
userRouter.route("/login-user").post(signInUser);
userRouter.route("/logout-user").post(verifyJWT, signOutUser);
userRouter.route("/reset-password").post(forgotPassword);

//route for testing
userRouter.route("/test").get(verifyJWT, isAdmin, testing);

export { userRouter };
