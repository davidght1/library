// DeleteUser.jsx

import React, { useState } from 'react';
import { useUserContext } from '../../Context/UsersContext';
import { useNavigate } from 'react-router-dom';
import './DeleteUser.css'; // Import the specific CSS file for DeleteUser

const DeleteUser = () => {
    const { isUserIdExists, deleteUserById } = useUserContext();
    const [userId, setUserId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleDeleteUser = () => {
        if (userId && isUserIdExists(userId)) {
            deleteUserById(userId);
            setUserId('');
            navigate('/users');
        } else {
            setErrorMessage('Invalid user data. Please provide an ID that exists in the usersData.');
        }
    };

    return (
        <div className="delete-user-container">
            <h2>Delete User</h2>
            <div className="form-group">
                <label className="label">User ID:</label>
                <input
                    type="text"
                    id="userId"
                    className="input"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
            </div>
            <button className="delete-button" onClick={handleDeleteUser}>
                Delete User
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default DeleteUser;
