import React from 'react';
import LogoutButton from './LogoutButton';

function Topbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Bienvenue sur votre dashboard</h1>
      <LogoutButton />
    </header>
  );
}

export default Topbar;
