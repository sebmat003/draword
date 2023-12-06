import { z } from "zod";
import { GenderEnum, UserRoleEnum } from "./models/user.enums.js";
import {
  EMAIL_REGEX,
  MAX_NAME_LENGTH,
  MIN_NAME_LENGTH,
  PASSWORD_REGEX,
} from "../../libraries/validation/validation.patterns.js";
import { IUser } from "./models/user.interfaces.js";

export const validateUserCreate = z.object<Record<keyof IUser, z.ZodSchema>>({
  id: z.number().int().positive(),
  login: z.string().min(MIN_NAME_LENGTH).max(MAX_NAME_LENGTH),
  email: z.string().email().regex(EMAIL_REGEX),
  name: z.string().min(MIN_NAME_LENGTH).max(MAX_NAME_LENGTH),
  role: z.nativeEnum(UserRoleEnum),
  password: z.string().regex(PASSWORD_REGEX),
  details: z.object({
    characterSet: z.object({
      gender: z.nativeEnum(GenderEnum),
      set: z.array(z.number().int().min(1).max(5)).length(3),
    }),
    currentExp: z.number().int(),
    games: z.number().int().nonnegative(),
    level: z.number().int().positive(),
    maxExp: z.number().int().min(100),
    ranking: z.number().int().positive(),
    wins: z.number().int().nonnegative(),
  }),
});
