import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddHotelPage.css';

const AddHotelPage = () => {
  const [hotel, setHotel] = useState({
    name: '',
    city: '',
    stars: 3,
    rooms: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hôtel ajouté : ${hotel.name} à ${hotel.city}`);
    setHotel({ name: '', city: '', stars: 3, rooms: 0 });
    navigate('/');
  };

  return (
    <div className="add-hotel-page">
      <h2>Ajouter un nouvel hôtel</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nom de l'hôtel" value={hotel.name} onChange={handleChange} required />
        <input name="city" placeholder="Ville" value={hotel.city} onChange={handleChange} required />
        <input type="number" name="stars" min="1" max="5" value={hotel.stars} onChange={handleChange} required />
        <input type="number" name="rooms" placeholder="Chambres disponibles" value={hotel.rooms} onChange={handleChange} required />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default AddHotelPage;
