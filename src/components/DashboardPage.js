import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import AddHotelPage from './AddHotelPage';

const DashboardPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/ajouter-hotel" element={<AddHotelPage />} />
      </Routes>
    </Router>
  );
};

export default DashboardPage;
