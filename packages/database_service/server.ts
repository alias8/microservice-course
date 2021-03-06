// config env and setup DB
import "./config/env";
import port from "./config";
// import everything else
import express from "express";
import bodyParser from "body-parser";
import applyGetRoutes from "./routes/get";
import applyPostRoutes from "./routes/post";
import configDB from "./dbUtil";
import configProd from "./config/config.prod";
import configDev from "./config/config.dev";

export const server = express();
// define middleware before routes
server.use(bodyParser.json()).listen(port, () => {
  console.log(`database service listening on port ${port}`);
});

applyGetRoutes(server);
applyPostRoutes(server);

configDB(process.env.NODE_ENV === "production" ? configProd : configDev);
