export const movieTypesDefs = `
  type Award {
     wins: Int
     nominations: Int
     text: String
  }

  type Movie {
    _id: ID
    title: String
    author: String
    awards: [Award]
   
  }

  input MovieInput {
    title: String
    author: String
  }
  input UserInput {
    name:String
    email:String
    password:String
  }
  input LoginInput {
    email:String
    password:String
  }

`;

export const movieQueryTypeDefs = `
  movie(_id: ID): Movie
  movies(title:String,page: Int!): [Movie]
`;

export const movieMutationTypeDefs = `
 addMovie(input: MovieInput): String
 signupUser(input:UserInput) : String
 loginUser(input:LoginInput) : String


`;
