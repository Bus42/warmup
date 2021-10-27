const express = require("express");

const hostname = "127.0.0.1";
const port = 5000;

const server = express();

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello Node");
// });

server.get("/", (req, res) => {
  res.send("Hello Express!");
});

server.listen(port, hostname, () => {
  console.log(`server listening on http://${hostname}:${port}`);
});
