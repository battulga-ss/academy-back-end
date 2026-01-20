import { Users } from "../model.ts";
import { type IUser } from "../types.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET as string;

export const userMutations = {
  login: async (_root: any, { input }: { input: IUser }) => {
    const { email, password } = input;

    const user = await Users.findOne({ email });

    if (!user) {
      throw new Error("No user found");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      SECRET_KEY,
      { expiresIn: "1d" },
    );

    return token;
  },

  register: async (_root: any, { input }: { input: IUser }) => {
    const { name, email, password } = input;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return newUser;
  },
};
