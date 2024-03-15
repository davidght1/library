import React, { useState } from 'react';
import { useBooksContext } from '../../Context/BooksContext'; // Import the context hook
import './AddBook.css';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const { books, setBooks } = useBooksContext(); // Destructure books and setBooks from the context
    const navigate = useNavigate();
    const [bookData, setBookData] = useState({
        id: '',
        name: '',
        category: '',
        author: '',
        description: '',
        isBorrowed: false
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the book ID already exists
        const isExistingId = books.some((book) => book.id === bookData.id);

        if (isExistingId) {
            setError('Book ID already exists!');
            return;
        }

        // Reset the error state if there was a previous error
        setError('');

        // Update the books list with the new book data
        setBooks([...books, bookData]);
        
        // Reset the form after submission
        setBookData({
            id: '',
            name: '',
            category: '',
            author: '',
            description: '',
            isBorrowed: false
        });
        navigate('/');
    };

    return (
        <div className="add-book-container">
            <h2>ADD NEW BOOK</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="bookId">Book Id:</label>
                    <input type="text" id="id" name="id" value={bookData.id} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={bookData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={bookData.category} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" value={bookData.author} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={bookData.description} onChange={handleChange} />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBook;
