import React from "react";
import { useParams, Link } from "react-router-dom";

function BookDetails() {
  const { bookId } = useParams(); // Get bookId from URL
  const books = JSON.parse(localStorage.getItem("books")) || [];

  const book = books[bookId]; // Get the specific book

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.content}</p>
      <Link to="/">Back to Book List</Link>
    </div>
  );
}

export default BookDetails;
