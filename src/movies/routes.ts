import express, { Router } from "express";
import type { Request, Response } from "express";

import { Movies } from "./models.ts";
export const movieRouter = Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  console.log("asdasd");
  const movie = await Movies.findOne({
    title: "Galaxy Quest",
  });
  res.send(movie);
});

movieRouter.post("/addMovies", async (req: Request, res: Response) => {
  const { plot, genre } = req.body;
  const newMovie = await Movies.insertOne({
    plot: plot,
    genres: genre,
    title: "Galaxy Quest",
    year: 2023,
    runtime: 10,
    cast: ["actorX, actorY"],
    poster: "poster",
    fullpolt: "eve",
    relased: "2014-11-07T00:00:00.000Z",
    languages: ["english,japanese,mongolian"],
    directors: ["mj,tk"],
    imdb: {
      rating: 10,
      votes: 1212,
      id: 2121,
    },

    awards: {
      wins: 21,
      nominations: 12,
      text: "xs",
    },
  });
  res.send("success");
});
movieRouter.put("/imdb", async (req: Request, res: Response) => {
  const { title } = req.body;
  await Movies.updateOne({ title: title }, { $set: { "imdb.rating": 8.2 } });
  res.send("success");
});
movieRouter.put("/push", async (req: Request, res: Response) => {
  const { title } = req.body;

  await Movies.updateOne({ title: title }, { $push: { genres: "adventure" } });

  res.send("success");
});
movieRouter.delete("/delete", async (req: Request, res: Response) => {
  const { title } = req.body;
  await Movies.deleteOne({
    title: title,
  });
  res.send("success");
});

movieRouter.get("/9plus", async (req: Request, res: Response) => {
  const a = await Movies.find({
    "imdb.rating": {
      $gte: 9,
    },
  });
  res.send(a);
});

movieRouter.get("/dramashit", async (req: Request, res: Response) => {
  const c = await Movies.find({
    genres: {
      $gte: ["Drama"],
    },
  });
  res.send(c);
});

movieRouter.put("/imdb0.5", async (req: Request, res: Response) => {
  const b = await Movies.find({
    year: {
      $gte: 2015,
    },
    $inc: { "imdb.rating": 0.5 },
  });
  res.send(b);
});
