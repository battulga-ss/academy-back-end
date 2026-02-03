import express, { type Request, type Response } from "express";
import { Movies } from "./models.ts";

export const movieRouter = express.Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  const { genre } = req.query;

  const query = {} as any;

  if (genre) {
    query.genres = genre;
  }

  const movies = await Movies.find(query).limit(100);

  res.json(movies);
});

movieRouter.post("/addMovie", async (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ success: true });
});
