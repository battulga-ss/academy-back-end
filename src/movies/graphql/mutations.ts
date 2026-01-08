import { Movies } from "../db/models.ts";
import { Users } from "../db/models.ts";
import { type IMovie } from "../types/movie.ts";
import { type IUser } from "../types/user.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
export { Token } from "graphql";
import { type IContext } from "../../index.ts";

dotenv.config();
export const movieMutations = {
  addMovie: async (
    _root: any,
    { input }: { input: IMovie },
    { user }: IContext
  ) => {
    const {
      title,
      year,
      runtime,
      poster,
      directors,
      languages,
      plot,
      fullplot,
      cast,
      genre,
    } = input;

    const movie = await Movies.insertOne({
      title,
      year,
      runtime,
      poster,
      directors,
      languages,
      plot,
      fullplot,
      cast,
      genre,
    });

    if (!user) {
      return "user oldsnq";
    }

    return "Success,added";
  },

  signupUser: async (_root: any, { input }: { input: IUser }) => {
    let { email, password, name } = input;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    return user.name;
  },

  loginUser: async (_root: any, { input }: { input: IUser }) => {
    let { email, password } = input;
    const loginUser = await Users.findOne({
      email,
    });
    const SECRET_KEY = process.env.JWT_SECRET;

    if (!SECRET_KEY) {
      throw new Error("JWT_SECRET is not defined");
    }
    if (!loginUser) {
      return "userbhq";
    }
    const isMatch = await bcrypt.compare(password, loginUser.password);
    if (!isMatch) {
      return "usernot found";
    }
    const token = jwt.sign(
      {
        email: loginUser.email,
        name: loginUser.name,
      },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    return token;
  },
};
