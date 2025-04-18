import React from 'react';
import background from '../assets/background.jpg'; // ✅ Ton image

const DashboardLayout = ({ children }) => {
  return (
    <div
      className="dashboard-layout"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="/">Accueil</a></li>
          <li><a href="/hotels">Hôtels</a></li>
          <li><a href="/reservations">Réservations</a></li>
          <li><a href="/clients">Clients</a></li>
          <li><a href="/utilisateurs">Utilisateurs</a></li>
        </ul>
      </nav>

      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
