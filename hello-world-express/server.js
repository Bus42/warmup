const express = require("express");

const hostname = "127.0.0.1";
const port = 5000;

const server = express();

server.get("/", (req, res) => {
  res.send("Hello Express!");
});

server.get("/foo", (req, res) => {
    res.send("bar")
})

server.listen(port, hostname, () => {
  console.log(`server listening on http://${hostname}:${port}`);
});
