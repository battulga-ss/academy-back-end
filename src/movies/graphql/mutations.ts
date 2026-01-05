import { Movies } from "../db/models.ts";
import { type IMovie } from "../types/movie.ts";

export const movieMutations = {
  addMovie: async (_root: any, { input }: { input: IMovie }) => {
    const movie = await Movies.insertOne({});

    return "Success";
  },
};
