import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/hotels">Hôtels</Link></li>
        <li><Link to="/reservations">Réservations</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/utilisateurs">Utilisateurs</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
