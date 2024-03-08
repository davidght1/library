// AddUser.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../Context/UsersContext';
import './AddUser.css'; // Import the CSS file

const AddUser = () => {
  const { addUser, isUserIdExists } = useUserContext();
  const [newUserName, setNewUserName] = useState('');
  const [newUserId, setNewUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleAddUser = () => {
    if (newUserId && newUserName && !isUserIdExists(newUserId)) {
      const newUser = {
        id: newUserId,
        name: newUserName,
        borrowed: {},
      };

      addUser(newUser);

      // Clear the input fields
      setNewUserId('');
      setNewUserName('');

      // Redirect to the users page or any other page after adding the user
      navigate('/users');
    } else {
      setErrorMessage('Invalid user data. Please provide a unique ID.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New User</h2>

      <div className="form-group">
        <label>New User ID:</label>
        <input
          type="text"
          id="newUserId"
          value={newUserId}
          onChange={(e) => setNewUserId(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>New User Name:</label>
        <input
          type="text"
          id="newUserName"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </div>

      <button onClick={handleAddUser}>Add User</button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default AddUser;
