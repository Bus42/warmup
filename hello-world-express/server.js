const express = require("express");
const hostname = "127.0.0.1";
const port = 5000;
const server = express();

const hobbits = [
  {
    id: 1,
    name: 'Samwise Gamgee',
  },
  {
    id: 2,
    name: 'Frodo Baggins',
  },
];

server.get("/foo", (req, res) => {
  res.send("bar")
})

server.get("/hobbits", (req, res) => {
  res.status(200).json(hobbits);
})

server.get("/", (req, res) => {
  res.send("Hello Express!");
});

server.listen(port, hostname, () => {
  console.log(`server listening on http://${hostname}:${port}`);
});
