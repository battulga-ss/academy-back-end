import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose, { model } from "mongoose";
import { typeDefs, resolvers } from "./apolloServer.ts";
import { Users } from "./movies/db/models.ts";
import jwt from "jsonwebtoken";
import { Token } from "graphql";
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
    firstname: string;
  };
}

const server = new ApolloServer<IContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Token required" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const users = Users.find({
      email: decoded.email,
    });
    if (!users) {
      ("user oldobg");
    }
    // token
    return {
      user: users,
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
