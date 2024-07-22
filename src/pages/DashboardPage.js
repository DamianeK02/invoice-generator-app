// src/pages/DashboardPage.js
import React from 'react';
import Dashboard from '../components/Dashboard';

const DashboardPage = ({ invoices }) => {
  return (
    <Dashboard invoices={invoices} />
  );
};

export default DashboardPage;
