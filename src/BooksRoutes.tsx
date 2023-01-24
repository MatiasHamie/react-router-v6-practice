import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import Book from "./Book";
import NewBook from "./NewBook";

const BooksRoutes = () => {
  return (
    <Routes>
      <Route index element={<BookList />} />
      <Route path=":id" element={<Book />} />
      <Route path="newBook" element={<NewBook />} />
    </Routes>
  );
};

export default BooksRoutes;
