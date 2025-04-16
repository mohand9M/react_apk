import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import "../styles/DashboardLayout.css";




function DashboardLayout({ children }) {
  return (


    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
