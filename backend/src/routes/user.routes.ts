import express from "express";
import * as userController from "../components/user/user.controller.js";
import { validateUserCreate } from "../components/user/user.validations.js";
import { validate } from "../libraries/validation/validate.middleware.js";

const router = express.Router();
const path = "/user";

router.route("/").post(validate(validateUserCreate), userController.createUser);

export { router, path };
