import React, { useState } from 'react';
import UsersList from '../../components/UsersList/UsersList';
import './Users.css'; // Import the specific CSS file for Users
import { Link } from 'react-router-dom';
import { useUserContext } from '../../Context/UsersContext';

const Users = () => {
    const { users } = useUserContext();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="users-container">
            <h2 className="users-heading dancing-script-font">Library Users</h2>

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            {filteredUsers.length > 0 ? (
                <UsersList users={filteredUsers} />
            ) : (
                <p className="no-users-message">No matching users found</p>
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
