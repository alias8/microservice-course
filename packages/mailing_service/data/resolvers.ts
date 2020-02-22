import axios from "axios";
import port from "../../database_service/config";
import { pushToMessageQ } from "../Q/connect";

const hostname = "http://localhost";
const databaseURL = `${hostname}:${port}`;

const get = async (path: string) => {
  console.log(`requesting: ${databaseURL}/${path}`);
  return (await axios.get(`${databaseURL}/${path}`)).data.payload;
};

const post = async (path: string, body: any) => {
  console.log("1", `${databaseURL}/${path}`);
  return (
    await axios.post(`${databaseURL}/${path}`, {
      ...body
    })
  ).data.payload;
};

export const resolvers = {
  Query: {
    mails: async () => get("mails"),
    getMail: (_: any, { id }: { id: string }) => get(`mails/${id}`)
  },
  Mutation: {
    mail: async (_: any, args: IEmail) => {
      console.log("-------------------------------", JSON.stringify(args));
      let result;
      let error;

      try {
        result = await post("mails", args);
      } catch (e) {
        error = e;
      }

      pushToMessageQ(JSON.stringify(args));
      return result || error;
    }
  }
};

export interface IEmail {
  subject: string;
  receiver: string;
  content: string;
}
