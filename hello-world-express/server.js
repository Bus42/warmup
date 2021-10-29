const express = require("express");

const hostname = "127.0.0.1";
const port = 5000;
const server = express();
server.use(express.json)

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

server.get("/", (req, res) => {
  res.send("Hello Express!");
});

server.get("/hobbits", (req, res) => {
  res.status(200).json(hobbits);
})

server.post("/hobbits", (req, res) => {
  // const hobbit = {...req.body, id: Date.now()};
  // hobbits.push(hobbit);
  // res.status(201).send(hobbits)
  res.send("record created");
})

server.listen(port, hostname, () => {
  console.log(`server listening on http://${hostname}:${port}`);
});
