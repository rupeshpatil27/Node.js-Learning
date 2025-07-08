import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";

const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, fullname, password } = req.body;

  if (
    [username, email, fullname, password].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ErrorHandler(400, "All fields are required");
  }

  const userExist = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (userExist) {
    throw new ErrorHandler(401, "User already register.!!");
  }

  const user = await User.create({
    username,
    email,
    fullname,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ErrorHandler(
      500,
      "Something went wrong while registering process,please try again."
    );
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registed.!!"));
});

export { registerUser };
