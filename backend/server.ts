import express from "express";
import cors from "cors";
import path from "node:path";
import { Request, Response } from "express";
import connectToDatabase from "./src/components/db/database-connection.ts";
import * as url from "node:url";
import dotenv from "dotenv";
import apiRouter from "./src/routes/index.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      ".env",
    ),
  });
}

const app = express();
const port = process.env.PORT || 3000;
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.get("/", (request: Request, response: Response) => {
  response.send("Hello, TypeScript Express!");
});

app.listen(port, () => {});
