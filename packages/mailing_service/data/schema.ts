import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

export const typeDefs = `
    type Query {
        mails: [Mail]
        getMail(id: ID!): Mail 
    }
    
    type Mutation {
        mail(subject: String!, receiver: String!, content: String!): Mail
    }
    
    type Mail {
        subject: String
        receiver: String
        content: String
        _id: String
    }
`;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
