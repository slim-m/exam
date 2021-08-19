import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    livres: [livre!]!
  }

  type livre {
    id: ID!
    titre: String!
  }

  type Mutation {
    createlivre(titre: String!): livre!
  }
`;
