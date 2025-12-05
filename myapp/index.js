const express = require("express");
const app = express();

app.get("/v2", (req, res) => {
  res.send("Hello from Node.js Docker-blue!");
});

app.listen(3000, () => console.log("Server running on port 3000"));

