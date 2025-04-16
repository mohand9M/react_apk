import React from 'react';

function StatsSummary() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">📊 Statistiques</h2>
      <ul>
        <li>Réservations : 52</li>
        <li>Chambres disponibles : 12</li>
        <li>Clients enregistrés : 102</li>
      </ul>
    </div>
  );
}

export default StatsSummary;
