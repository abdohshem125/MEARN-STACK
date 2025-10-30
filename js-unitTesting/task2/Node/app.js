let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/ContactUs", (req, res) => {
  res.status(200).json({ message: "This is ContactUs page" });
});

let server = app.listen(3000);
module.exports = server;
