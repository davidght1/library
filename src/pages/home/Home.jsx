// Home.jsx

import React, { useState } from 'react';
import dataBooks from '../../../dataBooks.js';
import BooksList from '../../components/BooksList/BooksList.jsx';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [books, setBooks] = useState(dataBooks);

  const availableBooks = books.filter((book) => !book.isBorrowed);

  return (
    <div className="home-container">
      <h2 className="welcome-heading dancing-script-font">Welcome To Tom & David Library</h2>
      {books.length > 0 ? (
        <BooksList books={availableBooks} />
      ) : (
        <p className="no-books-message">No books available</p>
      )}
    </div>
  );
}

export default Home;
