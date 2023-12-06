import expressAsyncHandler from "express-async-handler";
import * as usersService from "./user.service.js";
import httpStatus from "http-status";
import { Request, Response } from "express";

export const createUser = expressAsyncHandler(
  async (request: Request, response: Response) => {
    const user = await usersService.createUser(request.body);
    response.status(httpStatus.CREATED).send(user);
  },
);
