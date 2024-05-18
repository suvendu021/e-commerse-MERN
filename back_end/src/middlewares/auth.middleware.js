import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const verifyJWT = AsyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("authorization").replace("Header ", "");

    if (!token) {
      throw new ApiError(400, "unauthorize access");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!decodedToken) {
      throw new ApiError(400, "token has already expired");
    }
    const user = await User.findById(decodedToken._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(400, "invalid token can't get user");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(400, error?.message || "invalid accessToken");
  }
});

const isAdmin = AsyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  if (user.role !== 1) {
    return res.json(new ApiResponse(400, "unauthorize access"));
  } else {
    next();
  }
});

export { verifyJWT, isAdmin };
