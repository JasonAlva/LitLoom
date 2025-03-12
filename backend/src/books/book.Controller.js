const Book = require("./bookModel");

const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res.status(200).json({ message: "uploaded succesfullly", book: newBook });
  } catch (error) {
    console.error("Error while posting boook", error);
    res.status(500).json({ message: "Failed to create a book", error });
  }
};

//get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });

    res.status(200).json({ message: "books fetched successfully", books });
  } catch (error) {
    console.error("Error while fetching all boook", error);
    res.status(500).json({ message: "Failed to fetch all book", error });
  }
};

// get a single book

const getABook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({ message: "book doesnt exist" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Error while fetching the book", error);
    res.status(500).json({ message: "Failed to fetch the book", error });
  }
};

module.exports = { postABook, getAllBooks, getABook };
