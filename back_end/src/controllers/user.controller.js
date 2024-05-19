import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

//generate both accessToken and refreshToken
const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    // console.log("accesstoken :", accessToken);
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, error?.message || "error during creating tokens");
  }
};

//register/sign up user
const registerUser = AsyncHandler(async (req, res) => {
  const { userName, email, passWord, phone, address } = req.body;
  if (
    [userName, email, passWord, phone, address].some(
      (field) => field?.trim() === ""
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

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user._id);
  //   console.log("access token at controller: ", accessToken);

  const loginUser = await User.findById(user._id).select(
    "-passWord -refreshToken"
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(200, "successfully logged in", {
        accessToken,
        refreshToken,
        loginUser,
      })
    );
});

//logout user
const signOutUser = AsyncHandler(async (req, res) => {});

//controller for testing
const testing = AsyncHandler(async (req, res) => {
  const user = req.user;
  return res
    .status(200)
    .json(new ApiResponse(200, "procected route achieved", user));
});

export { registerUser, signInUser, signOutUser, testing };
