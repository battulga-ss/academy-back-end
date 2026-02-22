import express, { type Request, type Response } from "express";
import { Movies, Comments } from "./models.ts";
import { cp } from "node:fs";
export const movieRouter = express.Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  const { genre } = req.query;

  const query = {} as any;

  if (genre) {
    query.genres = genre;
  }

  const movies = await Movies.find(query).limit(20);

  res.json(movies);
});
movieRouter.post("/addMovie", async (req: Request, res: Response) => {
  let { title, year, genre, plot, poster, runtime } = req.body;

  await Movies.insertMany({
    title,
    year,
    plot,
    runtime,
    poster,
    genre,
  });
  res.json({ success: true });
});

movieRouter.post("/addComment", async (req: Request, res: Response) => {
  let { text, movie_id, email } = req.body;

  await Comments.insertMany({
    movie_id,
    text,
    email,
  });

  res.json({ success: true });
});

<<<<<<< HEAD
movieRouter.get("/movie/comments", async (req, res) => {
  const { movie_id } = req.query;

  if (!movie_id) {
    return res.status(400).json({ error: "movie_id required" });
  }

  const comments = await Comments.find({
    movie_id: movie_id.toString(),
  });
=======
movieRouter.get("/movie/comments", async (req: Request, res: Response) => {
  const { movie_id } = req.query;

  const query: any = {};
  if (movie_id) {
    query.movie_id = movie_id;
  }

  const comments = await Comments.find(query).limit(5);

  console.log("commmm", comments);
>>>>>>> 4c60c3c4043363e872e92d02a5dd2ac57ef8d5c9

  res.json(comments);
});

// movieRouter.get("/movie/comments", async (req: Request, res: Response) => {
//   let { movie_id } = req.query;
//   const movies = await Comments.find(query).limit(5);
//     movie_id,
//   });

//   res.json({ success: true, comments });
// });
