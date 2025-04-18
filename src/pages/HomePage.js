import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenue sur notre site hôtelier</h1>
      <p className="home-subtitle">
        Explorez, gérez et réservez dans les meilleurs établissements avec élégance.
      </p>

      <div className="nav-grid">
        <Link to="/" className="nav-card">Accueil</Link>
        <Link to="/hotels" className="nav-card">Hôtels</Link>
        <Link to="/reservations" className="nav-card">Réservations</Link>
        <Link to="/clients" className="nav-card">Clients</Link>
        <Link to="/utilisateurs" className="nav-card">Utilisateurs</Link>
      </div>
    </div>
  );
};

export default HomePage;
