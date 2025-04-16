import React from 'react';

function LogoutButton() {
  const handleLogout = () => {
    alert('Déconnexion réussie !');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Déconnexion
    </button>
  );
}

export default LogoutButton;
