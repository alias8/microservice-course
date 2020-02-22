import { IConfig } from "../../database_service/config";

const config: IConfig = {
  port: ((process.env.PORT as unknown) as number) || 5000,
  q: {
    uri: ""
  }
};

export default config;
