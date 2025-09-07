const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 5000;
require("dotenv").config();

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
    // methods: "GET,POST,PUT,PATCH,DELETE",
    credentials: true,
  })
);

// routes
const bookRoutes = require("./src/books/book.route");

app.use("/api/books", bookRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use("/", (req, res) => {
    res.send("BookShelf server is running!");
  });
}

main()
  .then(() => console.log("Mongodb connect successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Bookshelf   kr9FsnNxffnX2QPh
