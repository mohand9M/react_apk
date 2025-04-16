import React from 'react';
import StatsSummary from './StatsSummary';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../styles/DashboardHome.css';

const DashboardHome = () => {
  const data = {
    labels: ['Chambres', 'Réservations', 'Clients'],
    datasets: [
      {
        label: 'Statistiques',
        data: [10, 25, 15],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      },
    ],
  };

  const handleAddHotel = () => {
    alert('Bouton Ajouter un hôtel cliqué !');
  };

  return (
    <div className="dashboard-home">
      <StatsSummary />
      <div className="dashboard-graph">
        <h3>Statistiques générales</h3>
        <Bar data={data} />
      </div>
      <button className="add-hotel-btn" onClick={handleAddHotel}>
        ➕ Ajouter un hôtel
      </button>
    </div>
  );
};

export default DashboardHome;
