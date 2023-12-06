import mongoose from "mongoose";
import {
  EMAIL_REGEX,
  MAX_NAME_LENGTH,
  MIN_NAME_LENGTH,
  PASSWORD_REGEX,
} from "../../../libraries/validation/validation.patterns.ts";
import { IUser } from "./user.interfaces.js";
import { GenderEnum, UserRoleEnum } from "./user.enums.js";

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    validate: [EMAIL_REGEX, "Invalid email"],
    trim: true,
    unique: true,
    lowercase: true,
  },
  login: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: MIN_NAME_LENGTH,
    maxlength: MAX_NAME_LENGTH,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    validate: [
      PASSWORD_REGEX,
      "Password should contain minimum 8 characters, at least 1 letter and 1 number",
    ],
    select: false,
  },
  role: {
    type: String,
    enum: UserRoleEnum,
    default: UserRoleEnum.USER,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: MIN_NAME_LENGTH,
    maxlength: MAX_NAME_LENGTH,
  },
  id: { type: Number, required: true, unique: true, min: 1 },
  details: {
    level: { type: Number, required: true, min: 1 },
    wins: { type: Number, required: true, min: 0 },
    games: { type: Number, required: true, min: 0 },
    currentExp: { type: Number, required: true, min: 0 },
    maxExp: { type: Number, required: true, min: 100 },
    ranking: { type: Number, required: true, unique: true, min: 1 },
    characterSet: {
      gender: { type: String, enum: GenderEnum, required: true },
      set: { type: Array, required: true, length: 3 },
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
