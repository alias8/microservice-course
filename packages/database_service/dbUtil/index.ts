import mongoose from "mongoose";
import { IConfig } from "../config";

export default (config: IConfig) => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.mongoURI);
};
