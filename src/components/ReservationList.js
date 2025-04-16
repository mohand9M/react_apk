import React from 'react';

const reservations = [
  { id: 1, nom: 'Jean Dupont', chambre: '101', date: '2025-04-10' },
  { id: 2, nom: 'Sophie Martin', chambre: '203', date: '2025-04-12' },
];

function ReservationList() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">📅 Réservations à venir</h2>
      <ul className="space-y-2">
        {reservations.map((res) => (
          <li key={res.id} className="border-b pb-2">
            {res.nom} - Chambre {res.chambre} - {res.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
