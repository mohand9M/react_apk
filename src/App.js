import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import HomePage from './pages/HomePage';
import HotelsPage from './pages/HotelsPage';
import ReservationsPage from './pages/ReservationsPage';
import ClientsPage from './pages/ClientsPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/utilisateurs" element={<UsersPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
