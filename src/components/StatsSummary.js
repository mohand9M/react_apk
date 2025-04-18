import React from 'react';
import '../styles/StatsSummary.css';

const StatsSummary = () => {
  return (
    <div className="stats-summary">
      <div className="stat-box">Chambres: 10</div>
      <div className="stat-box">Réservations: 25</div>
      <div className="stat-box">Clients: 15</div>
    </div>
  );
};

export default StatsSummary;
