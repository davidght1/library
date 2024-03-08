// User.jsx
import React from 'react';
import './User.css';

const User = ({ user }) => {
  return (
    <div className="user-card">
      <p className="user-info">ID: {user.id}</p>
      <p className="user-info">Name: {user.name}</p>
      <p className="user-info">Borrowed: {JSON.stringify(user.borrowed)}</p>
    </div>
  );
};

export default User;
