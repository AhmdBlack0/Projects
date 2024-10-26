import React, { useState, useEffect } from "react"; // Import useEffect
import "../App.css"; // Custom styles
import Book from "./book"; // Ensure the Book component is imported correctly

function AddBook() {
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);
  const [title, setTitle] = useState(""); // State for book title
  const [content, setContent] = useState(""); // State for book content
  const [imageUrl, setImageUrl] = useState(""); // State for image URL
  const [books, setBooks] = useState([]); // State to store list of books
  const [editIndex, setEditIndex] = useState(null); // Index of the book being edited
  const [visibleContentIndex, setVisibleContentIndex] = useState(null); // Index of the book with visible content

  // Load books from local storage when the component mounts
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  const handleClick = () => {
    setTextAreaVisible(true); // Show textarea when clicking "+"
    resetForm(); // Reset form for adding new book
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setImageUrl("");
    setEditIndex(null); // Reset edit index
  };

  const handleClose = () => {
    setTextAreaVisible(false); // Hide the textarea modal
    resetForm(); // Reset form on close
  };

  const handleAddOrUpdate = () => {
    if (title.trim() && content.trim() && imageUrl.trim()) {
      if (editIndex !== null) {
        // Edit existing book
        const updatedBooks = books.map((book, index) =>
          index === editIndex ? { title, content, imageUrl } : book
        );
        setBooks(updatedBooks); // Update state with modified books array
      } else {
        // Add new book
        const newBooks = [...books, { title, content, imageUrl }];
        setBooks(newBooks); // Update state with new books array
      }
      localStorage.setItem("books", JSON.stringify(books)); // Save to local storage
      handleClose(); // Close the modal
    } else {
      alert("Please fill all fields (title, content, and image URL).");
    }
  };

  const handleEdit = (index) => {
    const bookToEdit = books[index];
    setTitle(bookToEdit.title);
    setContent(bookToEdit.content);
    setImageUrl(bookToEdit.imageUrl);
    setEditIndex(index); // Set the current book index to edit
    setTextAreaVisible(true); // Show textarea for editing
  };

  const toggleContentVisibility = (index) => {
    // Toggle visibility for the clicked book
    setVisibleContentIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="add-book" onClick={handleClick} aria-label="Add a book">
        <span>+</span>
      </div>

      {isTextAreaVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <textarea
              placeholder="Book Title"
              className="book-textarea"
              value={title}
              onChange={(e) => setTitle(e.target.value)} // Update title state
            ></textarea>
            <textarea
              placeholder="Book Content"
              className="book-textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)} // Update content state
            ></textarea>
            <textarea
              placeholder="Image URL"
              className="book-textarea"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)} // Update image URL state
            ></textarea>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
            <button className="update-btn" onClick={handleAddOrUpdate}>
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </div>
        </div>
      )}

      {/* Display the list of added books */}
      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <div onClick={() => toggleContentVisibility(index)}>
              <h2>{book.title}</h2>
            </div>
            {visibleContentIndex === index && (
              <div>
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="book-image"
                />
                <p>{book.content}</p>
              </div>
            )}
            <button className="edit-btn" onClick={() => handleEdit(index)}>
              Edit
                </button>
                <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddBook;
