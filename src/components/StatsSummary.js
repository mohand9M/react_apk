import React from 'react';
import '../styles/StatsSummary.css';

const StatsSummary = () => {
  return (
    <div className="stats-summary">
      <div className="stat">Chambres: 10</div>
      <div className="stat">Réservations: 25</div>
      <div className="stat">Clients: 15</div>
    </div>
  );
};

export default StatsSummary;
