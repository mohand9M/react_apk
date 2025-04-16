import React from 'react';

function UserProfileCard() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">👤 Profil utilisateur</h2>
      <p>Nom : Din Guemakh</p>
      <p>Email : din@email.com</p>
      <p>Rôle : Admin</p>
    </div>
  );
}

export default UserProfileCard;
