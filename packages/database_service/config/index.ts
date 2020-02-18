import configDev from "./config.dev";
import configProd from "./config.prod";
import configDB from "../dbUtil";

export interface IConfig {
  port: number;
  mongoURI: string;
}

const port =
  process.env.NODE_ENV === "production" ? configProd.port : configDev.port;

configDB(process.env.NODE_ENV === "production" ? configProd : configDev);

export default port;
