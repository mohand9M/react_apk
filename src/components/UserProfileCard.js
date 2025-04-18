import React from 'react';
import '../styles/UserProfileCard.css';

const UserProfileCard = () => {
  return (
    <div className="user-profile-card">
      <h3>Utilisateur connecté</h3>
      <p><strong>Nom:</strong> Admin</p>
      <p><strong>Email:</strong> admin@hotel.com</p>
    </div>
  );
};

export default UserProfileCard;
