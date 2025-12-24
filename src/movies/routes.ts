import express, { Router } from "express";
import type { Request, Response } from "express";

import { Movies } from "./models.ts";
export const movieRouter = Router();
export const addMovieRouter = Router();
// fetch("/movies");

movieRouter.get("/movies", async (req: Request, res: Response) => {
  const movie = await Movies.findOne({
    title: "Galaxy Quest",
  });
});
addMovieRouter.post("/addMovies", async (req: Request, res: Response) => {
  const newMovie = await Movies.insertOne({
    plot: "as",
    genre: ["crime"],
    title: "Galaxy Quest",
    year: 2023,
    runtime: 10,
    cast: ["actorX, actorY"],
    poster: "poster",
    fullpolt: "eve",
    relased: "2014-11-07T00:00:00.000Z",
    languages: ["english,japanese,mongolian"],
    directors: ["mj,tk"],
    awards: {
      wins: 21,
      nominations: 12,
      text: "xs",
    },
  });
});
