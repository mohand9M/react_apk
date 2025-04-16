import React from 'react';
import '../styles/ReservationList.css';

const ReservationList = () => {
  const reservations = [
    { id: 1, name: 'Jean Dupont', room: '3' },
    { id: 2, name: 'Claire Durand', room: '7' },
    { id: 3, name: 'Paul Morel', room: '1' },
  ];

  return (
    <div className="reservation-list">
      <h2>Réservations récentes</h2>
      <ul>
        {reservations.map(res => (
          <li key={res.id}>{res.name} - Chambre {res.room}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
