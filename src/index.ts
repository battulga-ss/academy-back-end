import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { movieRouter } from "./movies/routes.ts";
import cors from "cors";

// Express app
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/movie", movieRouter);

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://blessyou100x_db_user:INXFlzZtwh8J1AsE@backend.b2ndaz2.mongodb.net/sample_mflix?appName=backend-lesson",
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(3000, () => console.log("Server running on port 3000"));
