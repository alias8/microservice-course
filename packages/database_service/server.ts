// config env and setup DB
import "./config/env";
import port from "./config";
// import everything else
import express from "express";
import bodyParser from "body-parser";
import applyRoutes from "./routes/get";

export const server = express();

applyRoutes(server);

server.use(bodyParser.json()).listen(port, () => {
  console.log(`listening on port ${port}`);
});
