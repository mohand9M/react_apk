import React from 'react';
import '../styles/LogoutButton.css';

const LogoutButton = () => {
  const handleLogout = () => {
    alert("Déconnexion...");
    // Ici, tu peux ajouter la logique pour déconnexion
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Se déconnecter
    </button>
  );
};

export default LogoutButton;
