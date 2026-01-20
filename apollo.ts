import { serviceQueries } from "./src/quiz/graphql/queries.ts";
import {
  quizMutationTypeDefs,
  quizQueryTypeDefs,
  quizTypeDefs,
} from "./src/quiz/graphql/schema.ts";
import {
  answerMutation,
  questionMutation,
} from "./src/quiz/graphql/mutations.ts";
import {
  userTypeDefs,
  userMutationTypeDefs,
} from "./src/user/graphql/schema.ts";

import { userMutations } from "./src/user/graphql/mutation.ts";
export const typeDefs = `
    ${quizTypeDefs}
    type Query{
    ${quizQueryTypeDefs}}
    type Mutation{${quizMutationTypeDefs}}
    ${userTypeDefs}
    type Mutation {
    ${userMutationTypeDefs}}
`;
export const resolvers = {
  Query: { ...quizQueries },
  Mutation: { ...questionMutation, ...answerMutation, ...userMutations },
};
