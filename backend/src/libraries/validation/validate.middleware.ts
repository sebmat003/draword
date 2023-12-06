import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: z.AnyZodObject) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(request.body);
      next();
    } catch (error) {
      return response.status(409).json({
        status: "failed",
        error,
      });
    }
  };
