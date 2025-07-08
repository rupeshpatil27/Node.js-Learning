import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: "String",
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: "String",
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: "String",
      required: true,
      trim: true,
      index: true,
    },
    password: {
      type: "String",
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: "String",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email, username: this.username },
    process.env.ASSECC_TOKEN_SECRET,
    {
      expiresIn: process.env.ASSECC_TOKEN_EXPIRE,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email, username: this.username },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
    }
  );
};

export const User = mongoose.model("User", userSchema);
