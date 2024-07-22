// src/Dashboard.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard = ({ invoices }) => {
  const totalRevenue = invoices.reduce((sum, invoice) => sum + invoice.items.reduce((total, item) => total + item.quantity * item.price, 0), 0);
  const totalInvoices = invoices.length;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Typography variant="h6">Total Invoices: {totalInvoices}</Typography>
      <Typography variant="h6">Total Revenue: {totalRevenue}</Typography>
    </Box>
  );
};

export default Dashboard;
