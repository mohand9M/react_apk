import React from 'react';
import '../styles/LogoutButton.css';

const LogoutButton = () => {
  const handleLogout = () => {
    alert("Déconnexion réussie !");
    window.location.href = "/";
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      Se déconnecter
    </button>
  );
};

export default LogoutButton;
