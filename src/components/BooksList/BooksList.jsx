// BooksList.jsx

import React from 'react';
import Book from '../Book/Book';
import './BooksList.css';

const BooksList = ({ books }) => {
  return (
    <div className="books-list">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
