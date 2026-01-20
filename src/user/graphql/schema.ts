export const userTypeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }


  input LoginInput {
    email: String
    password: String
  }

  input RegisterInput {
    name: String
    email: String
    password: String
  }
   
`;
export const userMutationTypeDefs = `
  login(input: LoginInput): String
  register(input: RegisterInput): User
`;
