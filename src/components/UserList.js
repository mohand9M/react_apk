// UserList.js
import React from 'react';
import '../styles/UserList.css';

const UserList = () => {
  const users = [
    { id: 1, username: 'admin', role: 'Administrateur' },
    { id: 2, username: 'employe1', role: 'Employé' },
    { id: 3, username: 'employe2', role: 'Employé' },
  ];

  return (
    <div className="user-list">
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.username}</strong> – Rôle : {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
