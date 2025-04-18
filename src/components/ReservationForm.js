import React, { useState } from 'react';
import '../styles/ReservationForm.css';

const ReservationForm = ({ hotel, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    numberOfRooms: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Réservation confirmée pour ${formData.name} à l'hôtel ${hotel.name} !`);
    onClose();
  };

  return (
    <div className="reservation-popup">
      <div className="reservation-popup-inner">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Réserver à {hotel.name}</h2>
        <p><strong>Ville :</strong> {hotel.city}</p>
        <p><strong>Chambres disponibles :</strong> {hotel.rooms}</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="numberOfRooms"
            min="1"
            max={hotel.rooms}
            value={formData.numberOfRooms}
            onChange={handleChange}
            required
          />
          <button type="submit">Confirmer</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
