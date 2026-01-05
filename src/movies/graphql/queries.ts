import { Movies } from "../db/models.ts";
import { type IContext } from "../../index.ts";

export const movieQueries = {
  movies: async (
    _root: any,
    { title, page }: { title: string; page: number },
    { user }: IContext
  ) => {
    const perPage = 20;
    const skip = (page - 1) * perPage;

    if (title) {
      return Movies.find({ title }).skip(skip).limit(perPage);
    }

    return Movies.find().skip(skip).limit(perPage);
  },
  movie: async (_root: any, { _id }: { _id: string }) => {
    const movies = await Movies.findOne({ _id });

    return movies;
  },
};
