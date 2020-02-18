import { Express } from "express";
import { Mail } from "../dbUtil/Models/Mail";

function applyRoutes(server: Express) {
  server.get("/", async (_, res) => {
    const mail = new Mail({
      subject: "hello subject",
      receiver: "test@test.com",
      content: "hello content"
    });
    await mail.save();
    res.send(`saved new mail with id: ${mail._id}`);
  });
}

export default applyRoutes;
