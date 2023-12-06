import * as userRoutes from "./user.routes.ts";
import express from "express";

const apiRouter = express.Router();

apiRouter.use(userRoutes.path, userRoutes.router);

export default apiRouter;
