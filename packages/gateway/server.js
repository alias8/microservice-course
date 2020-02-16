const server = require("express")();
const bodyParser = require("body-parser");

server
  .use(bodyParser.json())
  .get("/", (_, res) => {
    res.send(" I am working as expected");
  })
  .listen(3000, () => {
    console.log("listening on port 3000");
  });
