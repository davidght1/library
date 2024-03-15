import React, { useState } from 'react';
import BooksList from '../../components/BooksList/BooksList.jsx';
import { useBooksContext } from '../../Context/BooksContext.jsx'; // Corrected import
import './Home.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Home = () => {
  const { books } = useBooksContext(); // Use useBooksContext to access the context
  const [searchTerm, setSearchTerm] = useState('');

  const availableBooks = books.filter((book) => !book.isBorrowed);
  const filteredBooks = availableBooks.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="home-container">
      <h2 className="welcome-heading dancing-script-font">Welcome To David && Tom Library</h2>
      <Link to="/addbook" className="add-new-book-link">
        <p>Add New Book</p>
      </Link>
      <div className="search-container">
        <input
          type="text"
          className="search-input" // Apply search-input class here
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {filteredBooks.length > 0 ? (
        <BooksList books={filteredBooks} />
      ) : (
        <p className="no-books-message">No matching books found</p>
      )}
    </div>
  );
};

export default Home;
