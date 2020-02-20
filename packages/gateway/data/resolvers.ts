import axios from "axios";

const mockMails = [
  {
    subject: "subject 1",
    receiver: "test1@test.com",
    content: "content 1"
  },
  {
    subject: "subject 2",
    receiver: "test2@test.com",
    content: "content 2"
  },
  {
    subject: "subject 3",
    receiver: "test3@test.com",
    content: "content 3"
  }
];

const getMails = async () => {
  return (await axios.get(`http://localhost:4000/mails`)).data.payload;
};

export const resolvers = {
  Query: {
    mails: async () => {
      return getMails();
    },
    mail: (_: any, args: any) => mockMails[0]
  },
  Mutation: {
    // @ts-ignore
    mail: (_: any, { subject, receiver, content }) => {
      mockMails[0] = { subject, receiver, content };
      return { subject, receiver, content };
    }
  }
};
