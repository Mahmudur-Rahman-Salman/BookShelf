const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello Bookshelf backend!");
});

app.listen(port, () => {
  console.log(`Backer server is connected at port ${port}`);
});
