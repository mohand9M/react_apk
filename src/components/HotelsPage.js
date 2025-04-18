import React from 'react';
import '../styles/HotelsPage.css';

const hotels = [
  { id: 1, name: 'Hôtel Soleil', city: 'Nice', stars: 4, rooms: 5, image: '/images/nice.jpg' },
  { id: 2, name: 'Le Grand Palace', city: 'Paris', stars: 5, rooms: 2, image: '/images/paris.jpg' },
  { id: 3, name: 'Hôtel Bleu Azur', city: 'Marseille', stars: 3, rooms: 8, image: '/images/marseille.jpg' },
  { id: 4, name: 'Résidence Montagne', city: 'Chamonix', stars: 4, rooms: 3, image: '/images/chamonix.jpg' },
  { id: 5, name: 'Hôtel des Dunes', city: 'Biarritz', stars: 3, rooms: 6, image: '/images/biarritz.jpg' },
  { id: 6, name: 'Hôtel Royal Spa', city: 'Lyon', stars: 5, rooms: 4, image: '/images/lyon.jpg' },
  { id: 7, name: 'Hôtel des Neiges', city: 'Grenoble', stars: 4, rooms: 7, image: '/images/grenoble.jpg' },
  { id: 8, name: 'Villa Océane', city: 'La Rochelle', stars: 4, rooms: 6, image: '/images/la_rochelle.jpg' },
  { id: 9, name: 'Palace Bellevue', city: 'Strasbourg', stars: 5, rooms: 9, image: '/images/strasbourg.jpg' },
  { id: 10, name: 'Le Panoramique', city: 'Annecy', stars: 3, rooms: 5, image: '/images/annecy.jpg' },
  { id: 11, name: 'Hôtel de la Mer', city: 'Cannes', stars: 4, rooms: 6, image: '/images/cannes.jpg' },
  { id: 12, name: 'Château Lumière', city: 'Tours', stars: 5, rooms: 4, image: '/images/tours.jpg' },
  { id: 13, name: 'Hôtel Renaissance', city: 'Dijon', stars: 3, rooms: 7, image: '/images/dijon.jpg' },
  { id: 14, name: 'Maison du Lac', city: 'Bordeaux', stars: 4, rooms: 5, image: '/images/bordeaux.jpg' },
  { id: 15, name: 'Les Jardins Secrets', city: 'Avignon', stars: 4, rooms: 3, image: '/images/avignon.jpg' },
  { id: 16, name: 'Évasion Nature', city: 'Clermont-Ferrand', stars: 3, rooms: 6, image: '/images/clermont.jpg' },
  { id: 17, name: 'Résidence Belle Vue', city: 'Montpellier', stars: 4, rooms: 8, image: '/images/montpellier.jpg' },
  { id: 18, name: 'Le Pavillon Bleu', city: 'Toulouse', stars: 4, rooms: 7, image: '/images/toulouse.jpg' },
  { id: 19, name: 'Auberge du Vent', city: 'Saint-Malo', stars: 3, rooms: 5, image: '/images/saint_malo.jpg' },
  { id: 20, name: 'La Rêverie', city: 'Nantes', stars: 5, rooms: 6, image: '/images/nantes.jpg' },
];

const HotelsPage = () => {
  return (
    <div className="hotels-container">
      <h1 className="hotels-title">Explorez notre sélection d'hôtels</h1>
      <p className="hotels-intro">
        Bienvenue dans notre espace dédié aux établissements de rêve ! Que vous cherchiez une escapade romantique, un séjour en famille ou un week-end de détente,
        nos hôtels sont prêts à vous accueillir avec confort et élégance.
      </p>

      <p className="hotels-description">
        Chaque hôtel a été soigneusement sélectionné pour vous offrir un service de qualité, des chambres confortables et une ambiance unique. Faites défiler la liste ci-dessous pour découvrir celui qui vous correspond le mieux !
      </p>

      <div className="hotels-grid">
        {hotels.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <div className="hotel-image-container">
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            </div>
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p><strong>Ville :</strong> {hotel.city}</p>
              <p><strong>Étoiles :</strong> {'★'.repeat(hotel.stars)}</p>
              <p><strong>Chambres :</strong> {hotel.rooms}</p>
              <button className="reserve-button">Réserver</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
