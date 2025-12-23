import { Router, Request, Response } from "express";
import { Movies } from "./models.ts";

export const movieRouter = Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  const movie = await Movies.findOne({});
});
