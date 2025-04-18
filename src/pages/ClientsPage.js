import React, { useState } from 'react';
import '../styles/ClientsPage.css';

const generateClients = () => {
  const names = ['Alice', 'Mohamed', 'Claire', 'Léa', 'Jean', 'Sara', 'Karim', 'Lucie', 'Thomas', 'Nora'];
  const surnames = ['Dubois', 'Ali', 'Fontaine', 'Bernard', 'Dupont', 'Benali', 'Ziani', 'Martin', 'Durand', 'Morel'];
  const cities = ['Paris', 'Marseille', 'Lyon', 'Nice', 'Toulouse', 'Lille', 'Montpellier', 'Strasbourg', 'Bordeaux', 'Nantes'];
  const clients = [];

  for (let i = 1; i <= 100; i++) {
    const name = `${names[i % names.length]} ${surnames[i % surnames.length]}`;
    const email = `${names[i % names.length].toLowerCase()}${i}@gmail.com`;
    const phone = `06 ${Math.floor(Math.random() * 90 + 10)} ${Math.floor(Math.random() * 90 + 10)} ${Math.floor(Math.random() * 90 + 10)} ${Math.floor(Math.random() * 90 + 10)}`;
    const city = cities[i % cities.length];

    clients.push({ id: i, name, email, phone, city });
  }

  return clients;
};

const ClientsPage = () => {
  const [clients] = useState(generateClients());
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('name');

  const filteredClients = clients
    .filter(client => client.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a[sortField].localeCompare(b[sortField]));

  return (
    <div className="clients-page">
      <h2>Liste des clients</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Rechercher un client..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setSortField(e.target.value)} value={sortField}>
          <option value="name">Nom</option>
          <option value="city">Ville</option>
          <option value="email">Email</option>
        </select>
      </div>

      <div className="clients-grid">
        {filteredClients.map(client => (
          <div className="client-card" key={client.id}>
            <h3>{client.name}</h3>
            <p><strong>Email :</strong> {client.email}</p>
            <p><strong>Téléphone :</strong> {client.phone}</p>
            <p><strong>Ville :</strong> {client.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsPage;