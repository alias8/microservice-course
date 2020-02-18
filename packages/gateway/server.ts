import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import port from "./config";
import { schema, typeDefs } from "./data/schema";

const server = express();

server
  .use(bodyParser.json())
  .use("/graphql", graphqlExpress({ schema }))
  .use("/gq", graphiqlExpress({ endpointURL: "/graphql" }))
  .listen(port, () => {
    console.log(`listening on port ${port}`);
  });
