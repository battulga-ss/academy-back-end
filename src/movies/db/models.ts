import { Schema, model } from "mongoose";
import {
  type ITomatoesDocument,
  type IMoviesDocument,
} from "../types/movie.ts";

const TomatoesSchema: Schema<ITomatoesDocument> = new Schema(
  {
    viewer: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    critic: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    rotten: Number,
    lastUpdated: Date,
  },
  { _id: false }
);

const MovieSchema: Schema<IMoviesDocument> = new Schema({
  plot: { type: String, required: true },
  genre: { type: [String], required: true },
  title: { type: String, required: true },
  year: { type: Number, required: true },
  runtime: { type: Number, required: true },
  cast: { type: [String], required: true },
  poster: { type: String, required: true },
  fullpolt: { type: String, required: true },
  relased: { type: Date, required: true, default: new Date() },
  languages: { type: [String], required: true },
  directors: { type: [String], required: true },
  awards: [
    {
      wins: { type: Number },
      nominations: { type: Number },
      text: { type: String },
    },
  ],
  tomatoes: TomatoesSchema,
});

export const Movies = model<IMoviesDocument>("movies", MovieSchema);
