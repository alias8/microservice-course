// config env and setup DB
import "./config/env";
import port from "./config";
// import everything else
import express from "express";
import bodyParser from "body-parser";
import applyGetRoutes from "./routes/get";
import applyPostRoutes from "./routes/post";

export const server = express();

applyGetRoutes(server);
applyPostRoutes(server);

server.use(bodyParser.json()).listen(port, () => {
  console.log(`database service listening on port ${port}`);
});
