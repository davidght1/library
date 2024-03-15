import React, { useContext } from 'react';
import BooksList from '../../components/BooksList/BooksList.jsx';
import { useBooksContext } from '../../Context/BooksContext.jsx'; // Corrected import
import './Home.css'; // Import the CSS file

const Home = () => {
  const { books } = useBooksContext(); // Use useBooksContext to access the context

  const availableBooks = books.filter((book) => !book.isBorrowed);

  return (
    <div className="home-container">
      <h2 className="welcome-heading dancing-script-font">Welcome To David && Tom Library</h2>
      {books.length > 0 ? (
        <BooksList books={availableBooks} />
      ) : (
        <p className="no-books-message">No books available</p>
      )}
    </div>
  );
}

export default Home;
