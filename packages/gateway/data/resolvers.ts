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

export const resolvers = {
  Query: {
    mails: () => mockMails,
    mail: (_: any, args: any) => mockMails[0]
  },
  Mutation: {
    mail: (_, args) => {
      mockMails[0] = args;
      return args;
    }
  }
};
