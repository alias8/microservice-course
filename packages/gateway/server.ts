import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import port from "./config";
import {typeDefs} from "./data/schema";
import {resolvers} from "./data/resolvers";

const server = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

server
  .use(bodyParser.json())
  .use("/graphql", graphqlExpress({ schema }))
  .use("/gq", graphiqlExpress({ endpointURL: "/graphql" }))
  .listen(port, () => {
    console.log("listening on port 3000");
  });
