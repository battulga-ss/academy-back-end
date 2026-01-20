import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { typeDefs, resolvers } from "./apolloServer.ts";
mongoose
  .connect(
    "mongodb+srv://ekzorigoo_db_user:qsQ6Q0bFTy1t8q1z@cluster0.oyy1zqu.mongodb.net/?appName=local",
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

export interface IContext {
  user: {
    name: string;
  };
}

const server = new ApolloServer<IContext>({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    return {
      user: {
        name: "bat",
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
