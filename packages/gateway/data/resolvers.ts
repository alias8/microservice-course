import axios from "axios";
import port from "../../database_service/config";

const hostname = "http://localhost";
const databaseURL = `${hostname}:${port}`;

const get = async (path: string) => {
  console.log(`requesting: ${databaseURL}/${path}`);
  return (await axios.get(`${databaseURL}/${path}`)).data.payload;
};

const post = async (path: string, body: any) => {
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
    mail: (_: any, args: IEmail) => post("mails", args)
  }
};

export interface IEmail {
  subject: string;
  receiver: string;
  content: string;
}
