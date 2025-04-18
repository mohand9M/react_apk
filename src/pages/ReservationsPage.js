import React from 'react';
import '../styles/ReservationsPage.css';

const reservations = [
  { id: 1, client: 'Alice Martin', hotel: 'Hôtel Soleil', date: '2025-05-01' },
  { id: 2, client: 'Lucas Dupont', hotel: 'Le Grand Palace', date: '2025-05-03' },
  { id: 3, client: 'Emma Garnier', hotel: 'Hôtel Bleu Azur', date: '2025-05-04' },
  { id: 4, client: 'Noah Bernard', hotel: 'Résidence Montagne', date: '2025-05-05' },
  { id: 5, client: 'Léa Fontaine', hotel: 'Hôtel des Dunes', date: '2025-05-06' },
  { id: 6, client: 'Maxime Laurent', hotel: 'Hôtel Soleil', date: '2025-05-07' },
  { id: 7, client: 'Manon Rousseau', hotel: 'Le Grand Palace', date: '2025-05-08' },
  { id: 8, client: 'Nathan Marchand', hotel: 'Hôtel Bleu Azur', date: '2025-05-09' },
  { id: 9, client: 'Chloé André', hotel: 'Résidence Montagne', date: '2025-05-10' },
  { id: 10, client: 'Julien Fabre', hotel: 'Hôtel des Dunes', date: '2025-05-11' },
  { id: 11, client: 'Sophie Richard', hotel: 'Hôtel Soleil', date: '2025-05-12' },
  { id: 12, client: 'Théo Girard', hotel: 'Le Grand Palace', date: '2025-05-13' },
  { id: 13, client: 'Camille Blanchard', hotel: 'Hôtel Bleu Azur', date: '2025-05-14' },
  { id: 14, client: 'Hugo Pires', hotel: 'Résidence Montagne', date: '2025-05-15' },
  { id: 15, client: 'Sarah Moreau', hotel: 'Hôtel des Dunes', date: '2025-05-16' },
  { id: 16, client: 'Louis Noel', hotel: 'Hôtel Soleil', date: '2025-05-17' },
  { id: 17, client: 'Inès Leblanc', hotel: 'Le Grand Palace', date: '2025-05-18' },
  { id: 18, client: 'Tom Lefèvre', hotel: 'Hôtel Bleu Azur', date: '2025-05-19' },
  { id: 19, client: 'Élise Georges', hotel: 'Résidence Montagne', date: '2025-05-20' },
  { id: 20, client: 'Adam Petit', hotel: 'Hôtel des Dunes', date: '2025-05-21' },
];

const ReservationsPage = () => {
  return (
    <div className="reservations-page">
      <h2>Liste des réservations</h2>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Hôtel</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res.id}>
              <td>{res.client}</td>
              <td>{res.hotel}</td>
              <td>{res.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsPage;
