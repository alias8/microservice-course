import { Express } from "express";
import { Mail } from "../dbUtil/Models/Mail";

const pingHandlers = (_, res) => {
  res.send("Healthy");
};

const mailHandler = async (_, res) => {
  let mails;
  let error;

  try {
    mails = await Mail.find();
  } catch (e) {
    error = e;
  }

  res.send({
    message: "Got response from DB",
    service: "Database Service",
    status: 200,
    payload: mails || error
  });
};

const singleMailHandler = async ({ params: { id }, res }) => {
  let mail;
  let error;

  try {
    mail = await Mail.findOne({ _id: id });
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
  server
    .get("/", pingHandlers)
    .get("/mails", mailHandler)
    .get("/mails/:id", singleMailHandler);
}

export default applyRoutes;
