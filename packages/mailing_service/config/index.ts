import configDev from "./config.dev";
import configProd from "./config.prod";

const port =
  process.env.NODE_ENV === "production" ? configProd.port : configDev.port;

export default port;
