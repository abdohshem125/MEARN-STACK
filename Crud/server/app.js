const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 7000;

let arr = [];

let data = fs.readFileSync("file.json", "utf-8");
if (data) {
  arr = JSON.parse(data);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/pages/index.html"));
});

app.get("/welcome", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/pages/welcome.html"));
});

app.get("/style/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/style/style.css"));
});

app.get("/clients", (req, res) => {
  res.json(arr);
});

app.post("/welcome.html", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../client/pages/welcome.html"));

  let welcomeHtml = fs.readFileSync(
    path.join(__dirname, "../client/pages/welcome.html"),
    "utf-8"
  );

  let { name, mobile, email, addr } = req.body;

  welcomeHtml = welcomeHtml.replace("{name}", name);
  welcomeHtml = welcomeHtml.replace("{mobile}", mobile);
  welcomeHtml = welcomeHtml.replace("{email}", email);
  welcomeHtml = welcomeHtml.replace("{addr}", addr);
  let obj = { name, mobile, email, addr };
  arr.push(obj);
  fs.writeFileSync("file.json", JSON.stringify(arr, null, 2));
  res.setHeader("content-type", "text/html");
  res.send(welcomeHtml);
});

app.put("/update/:id", (req, res) => {
  let id = parseInt(req.params.id);

  if (arr[id]) {
    arr[id] = req.body;
    fs.writeFileSync("file.json", JSON.stringify(arr, null, 2));
    res.json({ message: "Client updated successfully", client: arr[id] });
  } else {
    res.json({ message: "Client error" });
  }
});

app.delete("/delete/:id", (req, res) => {
  let id = parseInt(req.params.id);

  let index = arr.findIndex((c) => c.id === id);

  if (index !== -1) {
    let deletedClient = arr.splice(index, 1)[0]; // remove client

    fs.writeFileSync("file.json", JSON.stringify(arr, null, 2));

    res.json({ message: "Client deleted successfully", client: deletedClient });
  } else {
    res.status(404).json({ message: "Client not found" });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

