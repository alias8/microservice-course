import configDev from "./config.dev";
import configProd from "./config.prod";

export interface IConfig {
  port: number;
  mongoURI: string;
}

const port =
  process.env.NODE_ENV === "production" ? configProd.port : configDev.port;

export default port;
