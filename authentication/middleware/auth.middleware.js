import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";

import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "");

    if (!token) {
      throw new ErrorHandler(401, "Unauthorized request");
    }

    const decodeToken = jwt.verify(token, process.env.ASSECC_TOKEN_SECRET);

    const user = await User.findById(decodeToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ErrorHandler(401, "Inavalid Access Token");
    }

    req.user = user;

    next();
  } catch (error) {
    throw new ErrorHandler(401, error?.message || "Inavalid Access Token");
  }
});
