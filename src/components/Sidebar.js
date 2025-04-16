import React from 'react';
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>🏨 HôtelManager</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Réservations</a></li>
        <li><a href="#">Clients</a></li>
        <li><a href="#">Chambres</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
