import express from "express";
import path from "node:path";
import { Request, Response } from "express";
import Database from "./src/db/database-connection.ts";
import * as url from "node:url";
import dotenv from "dotenv";

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
const database = new Database();
database.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request: Request, response: Response) => {
  response.send("Hello, TypeScript Express!");
});

app.listen(port, () => {});
