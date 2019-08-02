const express = require("express");

const server = express();

const users = ["Marco", "Isa", "Tobby"];

server.get("/users/:index", (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

addEventListener.apply;

server.listen(3000);
