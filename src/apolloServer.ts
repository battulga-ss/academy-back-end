import {
  movieTypesDefs,
  movieQueryTypeDefs,
  movieMutationTypeDefs,
} from "./movies/graphql/schema.ts";
import { movieQueries } from "./movies/graphql/queries.ts";
import { movieMutations } from "./movies/graphql/mutations.ts";

export const typeDefs = `
  ${movieTypesDefs}

  type Query {
    ${movieQueryTypeDefs}
  }

  type Mutation {
    ${movieMutationTypeDefs}
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: { ...movieQueries },
  Mutation: {
    ...movieMutations,
  },
};
