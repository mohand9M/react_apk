// ClientList.js
import React from 'react';
import '../styles/ClientList.css';

const ClientList = () => {
  const clients = [
    { id: 1, name: 'Alice Martin', email: 'alice@gmail.com' },
    { id: 2, name: 'Thomas Bernard', email: 'thomasb@gmail.com' },
    { id: 3, name: 'Sophie Lemoine', email: 'sophie.lm@yahoo.fr' },
  ];

  return (
    <div className="client-list">
      <h2>Liste des clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            <strong>{client.name}</strong> – {client.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
