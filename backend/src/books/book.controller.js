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

module.exports = {
  postBook,
  getAllBooks,
};
