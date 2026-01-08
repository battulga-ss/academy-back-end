import { Schema, model } from "mongoose";
import {
  type ITomatoesDocument,
  type IMoviesDocument,
  type ICommentsDocument,
} from "../types/movie.ts";
import { type IUserDocument } from "../types/user.ts";
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
  plot: { type: String },
  genre: { type: [String] },
  title: { type: String },
  year: { type: Number },
  runtime: { type: Number },
  cast: { type: [String] },
  poster: { type: String },
  fullplot: { type: String },
  relased: { type: Date, default: new Date() },
  languages: { type: [String] },
  directors: { type: [String] },

  awards: [
    {
      wins: { type: Number },
      nominations: { type: Number },
      text: { type: String },
    },
  ],
  tomatoes: TomatoesSchema,
});

const userSchema: Schema<IUserDocument> = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});
const CommentsSchema: Schema<ICommentsDocument> = new Schema({
  movie_id: { type: String },
  name: { type: String },
  email: { type: String },
  text: { type: String },
});

export const Movies = model<IMoviesDocument>("movies", MovieSchema);
export const Users = model<IUserDocument>("users", userSchema);
export const Comments = model<ICommentsDocument>("comments", CommentsSchema);
