import { Express, Response } from "express";
import { Mail } from "../dbUtil/Models/Mail";
import { IEmail } from "../../gateway/data/resolvers";

const mailHandler = async (
  { body: { subject, receiver, content } }: { body: IEmail },
  res: Response
) => {
  if (!subject || !receiver || !content) {
    res.sendStatus(400).send({
      message: "You forgot some parameters",
      service: "Database Service",
      status: 400
    });
  }

  let mail;
  let error;

  try {
    mail = await new Mail({
      subject,
      receiver,
      content
    }).save();
  } catch (e) {
    error = e;
  }

  res.send({
    message: "Got response from DB",
    service: "Database Service",
    status: 200,
    payload: mail || error
  });
};

function applyRoutes(server: Express) {
  server.post("/mails", mailHandler);
}

export default applyRoutes;
