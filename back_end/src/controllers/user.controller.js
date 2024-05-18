import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

//generate both accessToken and refreshToken
const generateAccessTokenAndRefreshToken = async function (userId) {
  const user = await User.findById(userId);
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
};

//register/sign up user
const registerUser = AsyncHandler(async (req, res) => {
  const { userName, email, passWord, phone, address } = req.body;
  if (
    [userName, email, passWord, phone, address].some(
      (field) => field.trim() === ""
    )
  ) {
    throw new ApiError(400, "every field need to be filled");
  }

  const existedUser = await User.findOne({ $or: [{ userName }, { email }] });
  if (existedUser) {
    throw new ApiError(400, "user already exist");
  }

  const user = await User.create({
    userName,
    email,
    passWord,
    phone,
    address,
  });

  const createdUser = await User.findById(user._id).select(
    "-passWord -refreshToken"
  );

  return res
    .status(200)
    .json(new ApiResponse(200, "successfully registered", createdUser));
});

//login/sign in user
const signInUser = AsyncHandler(async (req, res) => {
  const { email, passWord } = req.body;
  if (!email || !passWord) {
    throw new ApiError(400, "every field need to login");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(400, "user is not exist ! plz create account first");
  }

  const isPassWordCorrect = await user.isPassWordCorrect(passWord);
  if (isPassWordCorrect === false) {
    throw new ApiError(400, "entered password is wrong");
  }
});

//logout user
const signOutUser = AsyncHandler(async (req, res) => {});

export { registerUser, signInUser, signOutUser };
