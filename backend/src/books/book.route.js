const express = require("express");
const Book = require("./Book.model");
const { postBook, getAllBooks, getSingleBook } = require("./book.controller");
const router = express.Router();

// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something

// post a book
router.post("/create-book", postBook);

//get all books
router.get("/", getAllBooks);

// single boook 
router.get("/:id", getSingleBook); 



module.exports = router;
