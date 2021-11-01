const express = require("express");
const morgan = require("morgan");
const port = 5000;
const server = express();
server.use(express.json());
server.use(morgan("dev"));

const hobbits = [
  {
    id: 1,
    name: "Samwise Gamgee",
  },
  {
    id: 2,
    name: "Frodo Baggins",
  },
];

server.get("/foo", (req, res) => {
  res.send("bar");
});

server.get("/", (req, res) => {
  res.send("Hello Express!");
});

server.get("/hobbits", (req, res) => {
  res.status(200).json(hobbits);
});

server.post("/hobbits", (req, res) => {
  console.log(req.body || "error");
  const hobbit = req.body;
  // hobbits.push(hobbit);
  // res.status(201).send(hobbits)
  res.status(200).json({ hobbit });
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
