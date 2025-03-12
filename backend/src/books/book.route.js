const express = require("express");
const route = express.Router();
const Book = require("./bookModel");
const { postABook, getAllBooks, getABook } = require("./book.Controller");

//post
route.post("/create-book", postABook);

//get all books
route.get("/", getAllBooks);

//get a single book
route.get("/:id", getABook);

module.exports = route;
