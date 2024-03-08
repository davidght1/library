// Users.jsx

import React from 'react';
import UsersList from '../../components/UsersList/UsersList';
import './Users.css'; // Import the specific CSS file for Users
import { Link } from 'react-router-dom';
import { useUserContext } from '../../Context/UsersContext';

const Users = () => {
    const { users } = useUserContext();

    return (
        <div className="users-container">
            <h2 className="users-heading dancing-script-font">Library Users</h2>

            {users.length > 0 ? (
                <UsersList users={users} />
            ) : (
                <p className="no-users-message">No users available</p>
            )}
            <Link to="/add-user">
                <button>Add New User</button>
            </Link>
            <Link to="/deleteuser">
                <button className="delete-user-button">Delete User</button>
            </Link>
        </div>
    );
};

export default Users;
