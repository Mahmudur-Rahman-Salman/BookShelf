const Book = require("./Book.model");

const postBook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book created successfully", book: newBook });
    console.log(newBook);
  } catch (error) {
    console.error("Error creating book", error);
    res
      .status(500)
      .send({ message: "Failed to create book", error: error.message });
  }
};

// get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send({ message: "Books retrieved successfully", books });
  } catch (error) {
    console.error("Error retrieving books", error);
    res
      .status(500)
      .send({ message: "Failed to retrieve books", error: error.message });
  }
};

// get single book
const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book retrieved successfully", book });
  } catch (error) {
    console.error("Error retrieving book", error);
    res
      .status(500)
      .send({ message: "Failed to retrieve book", error: error.message });
  }
};

module.exports = {
  postBook,
  getAllBooks,
  getSingleBook,
};
