import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { movieRouter } from "./movies/routes.ts";

// Express app
const app = express();
app.use(bodyParser.json());

app.use("/movie", movieRouter);
// app.use("./addMovies", addMovieRouter);
// MongoDB connection
await mongoose
  .connect(
    "mongodb+srv://blessyou100x_db_user:8M13Savg2vLl3UUr@backend.b2ndaz2.mongodb.net/sample_mflix?appName=backend"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(3000, () => console.log("Server running on port 3000"));
