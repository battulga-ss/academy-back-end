import { Document } from "mongoose";
// import { IUsers } from "../types/user.ts";

export interface IRating {
  rating: number;
  numReviews: number;
  meter: number;
}

export interface ITomateos {
  viewer: IRating;
  fresh?: number;
  critic?: IRating;
  rotten?: number;
  lastUpdated?: Date;
}

export interface ITomatoesDocument extends ITomateos, Document {}

export interface IMovie {
  title: string;
  year: number;
  plot: string;
  genre: string[];
  runtime: number;
  cast: string[];
  poster: string;
  fullpolt: string;
  relased: Date;
  languages: string[];
  directors: string[];
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  tomatoes: ITomateos;
}
export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IMoviesDocument extends IMovie, Document {
  title: string;
}
export interface IUserDocument extends IUser, Document {
  title: string;
}
