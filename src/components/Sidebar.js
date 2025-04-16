// Sidebar.js
import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li onClick={() => onSelect('home')}>Accueil</li>
        <li onClick={() => onSelect('reservations')}>Réservations</li>
        <li onClick={() => onSelect('clients')}>Clients</li>
        <li onClick={() => onSelect('users')}>Utilisateurs</li>
      </ul>
    </div>
  );
};

export default Sidebar;
