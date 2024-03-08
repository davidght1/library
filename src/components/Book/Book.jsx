// Book.jsx

import React from 'react';
import './Book.css';

const Book = ({ book }) => {
  return (
    <div className="book-card">
      <p className="book-title">{book.name}</p>
      <div className="book-info">
        <p>Category: {book.category}</p>
        <p>Author: {book.author}</p>
        <p>Description: {book.description}</p>
        <p>Borrowed Status: <span className="borrowed-status">{book.isBorrowed ? 'Borrowed' : 'Available'}</span></p>
      </div>
    </div>
  );
};

export default Book;
