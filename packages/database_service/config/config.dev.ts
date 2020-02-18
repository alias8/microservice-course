import { IConfig } from "./index";

const config: IConfig = {
  port: ((process.env.PORT as unknown) as number) || 4000,
  mongoURI: `mongodb://${process.env.mongodbuser}:${process.env.mongodbpassword}@ds013004.mlab.com:13004/microservice_db`
};

export default config;
