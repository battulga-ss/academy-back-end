import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose, { model } from "mongoose";
import { typeDefs, resolvers } from "./apolloServer.ts";
import { Users } from "./movies/db/models.ts";
import jwt from "jsonwebtoken";
import { Token } from "./movies/graphql/mutations.ts";
mongoose
  .connect(
    "mongodb+srv://blessyou100x_db_user:INXFlzZtwh8J1AsE@backend.b2ndaz2.mongodb.net/sample_mflix"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

export interface IContext {
  user: {
    firstname: String;
  };
}

const server = new ApolloServer<IContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer<any>(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    const token = req.headers.authorization;

    console.log("token", token);

    if (!token) {
      return "no token";
    }

    console.log(111111);

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "secret");

    const users = await Users.findOne({
      email: decoded.email,
    }).lean();

    console.log("users", users);

    if (!users) {
      return "user oldsongue";
    }

    // token
    return {
      user: users,
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
