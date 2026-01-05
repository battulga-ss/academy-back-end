import { Document } from "mongoose";

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

export interface IMoviesDocument extends IMovie, Document {
  title: string;
}
