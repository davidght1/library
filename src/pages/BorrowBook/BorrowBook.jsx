import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBooksContext } from '../../Context/BooksContext';
import { useUserContext } from '../../Context/UsersContext';
import './BorrowBook.css'; // Import your CSS file

const BorrowBook = () => {
    const { id } = useParams();
    const [userId, setUserId] = useState('');
    const { borrowBook: borrowBookFromBooksContext } = useBooksContext();
    const { isUserIdExists, borrowBookUser } = useUserContext();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userId.trim()) {
            setError('Please enter the user ID');
            return;
        }
        if (!isUserIdExists(userId)) {
            setError('User does not exist');
            return;
        }
        setError('');
        borrowBookFromBooksContext(id); // Borrowing the book from the BooksContext
        borrowBookUser(userId, id); // Updating the user's borrowed books in the UserContext
        setUserId('');
        navigate('/')
    };

    return (
        <div className="borrow-book-container">
            <h2 className="title">Borrow Book</h2>
            <p className="book-id">Book ID: {id}</p>
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor='userId'>User ID:</label>
                    <input type='text' id='userId' value={userId} onChange={(e) => setUserId(e.target.value)} />
                </div>
                <button className="btn" type='submit'>Borrow</button>
            </form>
        </div>
    );
};

export default BorrowBook;
