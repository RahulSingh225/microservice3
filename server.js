const express = require("express");
const app = express();

const PORT = process.env.PORT || 5003;
const HOST = "0.0.0.0";

app.get("/service3", (req, res) => {
  res.send("Connected to service 3");
});

app.listen(PORT, HOST, () => {
  console.log(`Service 3 Running on ${PORT}`);
});
