import React from 'react';
import '../styles/UserList.css';

const UserList = () => {
  return (
    <div className="user-list">
      <h2>Utilisateurs enregistrés</h2>
      <ul>
        <li>Admin</li>
        <li>Manager</li>
        <li>Employé</li>
      </ul>
    </div>
  );
};

export default UserList;
