const express = require("express");
const route = express.Router();
const Book = require("./bookModel");
const {
  postABook,
  getAllBooks,
  getABook,
  updateBook,
  deleteABook,
} = require("./book.Controller");

//post
route.post("/create-book", postABook);

//get all books
route.get("/", getAllBooks);

//get a single book
route.get("/:id", getABook);

//update book

route.put("/edit/:id", updateBook);

//delete a book
route.delete("/:id", deleteABook);

module.exports = route;
