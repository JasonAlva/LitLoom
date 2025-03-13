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

    res.status(200).send(books);
  } catch (error) {
    console.error("Error while fetching all boook", error);
    res.status(500).send({ message: "Failed to fetch all book", error });
  }
};

// get a single book

const getABook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "book doesnt exist" });
    }

    res.status(200).send(book);
  } catch (error) {
    console.error("Error while fetching the book", error);
    res.status(500).send({ message: "Failed to fetch the book", error });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookUpdate = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!bookUpdate) {
      res.status(404).send({ message: "book not found" });
    }

    res
      .status(200)
      .send({ message: "book updated successfully", book: bookUpdate });
  } catch (error) {
    console.error("Error while updating the book", error);
    res.status(500).send({ message: "Failed to update the book", error });
  }
};

const deleteABook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).send({ message: "book not found" });
    }

    res
      .status(200)
      .send({ message: "book deleted successfully", book: deletedBook });
  } catch (error) {
    console.error("Error while deleting the book", error);
    res.status(500).send({ message: "Failed to delete the book", error });
  }
};

module.exports = { postABook, getAllBooks, getABook, updateBook, deleteABook };
