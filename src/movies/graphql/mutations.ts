import { Movies } from "../db/models.ts";
import { Users } from "../db/models.ts";
import { type IMovie } from "../types/movie.ts";
import { type IUser } from "../types/user.ts";

export const movieMutations = {
  addMovie: async (_root: any, { input }: { input: IMovie }) => {
    const movie = await Movies.insertOne({});

    return "Success";
  },

  signupUser: async (_root: any, { input }: { input: IUser }) => {
    let { email, password, name } = input;

    const user = await Users.insertOne({
      name,
      email,
      password,
    });

    return user.name;
  },
};

export const loginMutations = {
  loginUser: async (_root: any, { input }: { input: IUser }) => {
    let { email, password } = input;
    const data = await Users.find({
      email,
      password,
    });
    return "loginsucc";
  },
};
