// DashboardLayout.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import StatsSummary from './StatsSummary';
import HotelList from './HotelList';
import ReservationList from './ReservationList';
import ClientList from './ClientList';
import UserList from './UserList';
import UserProfileCard from './UserProfileCard';
import LogoutButton from './LogoutButton';
import DashboardHome from './DashboardHome';
import '../styles/DashboardLayout.css';

const DashboardLayout = () => {
  const [activeView, setActiveView] = useState('home');

  const renderContent = () => {
    switch (activeView) {
      case 'reservations':
        return <HotelList />;
      case 'clients':
        return <ClientList />;
      case 'users':
        return <UserList />;
      default:
        return <DashboardHome />; // 👈 Page d’accueil personnalisée
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar onSelect={setActiveView} />
      <div className="dashboard-main">
        <Topbar />
        {renderContent()}
        <UserProfileCard />
        <LogoutButton />
      </div>
    </div>
  );
};

export default DashboardLayout;
