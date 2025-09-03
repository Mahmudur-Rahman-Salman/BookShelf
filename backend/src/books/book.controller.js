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

// update book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res
      .status(200)
      .send({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    console.error("Error updating book", error);
    res
      .status(500)
      .send({ message: "Failed to update book", error: error.message });
  }
};

// delete book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res
      .status(200)
      .send({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    console.error("Error deleting book", error);
    res
      .status(500)
      .send({ message: "Failed to delete book", error: error.message });
  }
};

module.exports = {
  postBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
