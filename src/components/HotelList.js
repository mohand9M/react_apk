""import React, { useState } from 'react';
import ReservationForm from './ReservationForm';
import '../styles/HotelList.css';



const hotels = [
  {
    id: 1,
    name: 'Hôtel Soleil',
    city: 'Nice',
    stars: 4,
    rooms: 5,
    image: '/images/nice.jpg',
  },
  {
    id: 2,
    name: 'Le Grand Palace',
    city: 'Paris',
    stars: 5,
    rooms: 2,
    image: '/images/paris.jpg',
  },
  {
    id: 3,
    name: 'Hôtel Bleu Azur',
    city: 'Marseille',
    stars: 3,
    rooms: 8,
    image: '/images/marseille.jpg',
  },
  {
    id: 4,
    name: 'Résidence Montagne',
    city: 'Chamonix',
    stars: 4,
    rooms: 3,
    image: '/images/chamonix.jpg',
  },
  {
    id: 5,
    name: 'Hôtel des Dunes',
    city: 'Biarritz',
    stars: 3,
    rooms: 6,
    image: '/images/biarritz.jpg',
  },
];

const HotelList = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleReserveClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  return (
    <div className="hotel-list">
      <h2>Liste des hôtels</h2>
      <div className="hotel-cards">
        {hotels.map(hotel => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.city} className="hotel-image" />
            <h3>{hotel.name}</h3>
            <p><strong>Ville :</strong> {hotel.city}</p>
            <p><strong>Étoiles :</strong> {'★'.repeat(hotel.stars)}{'☆'.repeat(5 - hotel.stars)}</p>
            <p><strong>Chambres disponibles :</strong> {hotel.rooms}</p>
            <button onClick={() => handleReserveClick(hotel)}>Réserver</button>
          </div>
        ))}
      </div>
      {selectedHotel && (
        <ReservationForm hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />
      )}
    </div>
  );
};

export default HotelList;
