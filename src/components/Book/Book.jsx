import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import { IoMdTrash } from "react-icons/io";
import { useBooksContext } from '../../Context/BooksContext';


const Book = ({ book }) => {
  const {removeBook} = useBooksContext()
  const handleRemoveBook = ()=>{
    removeBook(book.id);
  }

  return (
    <div className="book-card">
      <div className="trash-icon-container">
        <IoMdTrash onClick={handleRemoveBook} className="trash-icon" />
      </div>
      <p className="book-title">{book.name}</p>
      <div className="book-info">
        <p>Category: {book.category}</p>
        <p>Author: {book.author}</p>
        <p>Description: {book.description}</p>
        <p>Borrowed Status: <span className="borrowed-status">{book.isBorrowed ? 'Borrowed' : 'Available'}</span></p>
      </div>
      <Link to={`/borrowedbook/${book.id}`} style={{ textDecoration: 'none' }}>
        <button className="book-button">Borrow This Book</button>
      </Link>
    </div>
  );
};

export default Book;
