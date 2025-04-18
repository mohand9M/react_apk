import React from 'react';
import '../styles/UsersPage.css';

const users = [
  { id: 1, name: 'Sarah Benali', role: 'Administratrice', email: 'sarah@hotel.com' },
  { id: 2, name: 'Karim Ziani', role: 'Réceptionniste', email: 'karim@hotel.com' },
  { id: 3, name: 'Julie Lefevre', role: 'Manager', email: 'julie@hotel.com' },
  { id: 4, name: 'Ali Moussa', role: 'Support', email: 'ali@hotel.com' },
];

const UsersPage = () => {
  return (
    <div className="users-page">
      <h2>Utilisateurs</h2>
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Rôle :</strong> {user.role}</p>
            <p><strong>Email :</strong> {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
