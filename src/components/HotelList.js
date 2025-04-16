import React from 'react';
import '../styles/HotelList.css';

const hotels = [
  { id: 1, name: 'Hôtel Soleil', city: 'Nice', stars: 4, rooms: 5 },
  { id: 2, name: 'Le Grand Palace', city: 'Paris', stars: 5, rooms: 2 },
  { id: 3, name: 'Hôtel Bleu Azur', city: 'Marseille', stars: 3, rooms: 8 },
  { id: 4, name: 'Résidence Montagne', city: 'Chamonix', stars: 4, rooms: 3 },
  { id: 5, name: 'Hôtel des Dunes', city: 'Biarritz', stars: 3, rooms: 6 },
];

const HotelList = () => {
  return (
    <div className="hotel-list">
      <h2>Liste des hôtels</h2>
      <div className="hotel-cards">
        {hotels.map(hotel => (
          <div key={hotel.id} className="hotel-card">
            <h3>{hotel.name}</h3>
            <p><strong>Ville :</strong> {hotel.city}</p>
            <p><strong>Étoiles :</strong> {'★'.repeat(hotel.stars)}{'☆'.repeat(5 - hotel.stars)}</p>
            <p><strong>Chambres disponibles :</strong> {hotel.rooms}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
