import { Router } from "express";
import {
  registerUser,
  signInUser,
  signOutUser,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/register-user").post(registerUser);
userRouter.route("/login-user").post(signInUser);
userRouter.route("/logout-user").post(signOutUser);

export { userRouter };
