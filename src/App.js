// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateInvoice from './pages/CreateInvoice';
import ManageClients from './pages/ManageClients';
import DashboardPage from './pages/DashboardPage';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';

const App = () => {
  const [clients, setClients] = useState([]);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem('clients')) || [];
    const storedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    setClients(storedClients);
    setInvoices(storedInvoices);
  }, []);

  const handleAddClient = (client) => {
    const updatedClients = [...clients, client];
    setClients(updatedClients);
    localStorage.setItem('clients', JSON.stringify(updatedClients));
  };

  const handleAddInvoice = (invoice) => {
    const updatedInvoices = [...invoices, invoice];
    setInvoices(updatedInvoices);
    localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Invoice App
          </Typography>
          <Button color="inherit" component={Link} to="/">Create Invoice</Button>
          <Button color="inherit" component={Link} to="/manage-clients">Manage Clients</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route exact path="/" element={<CreateInvoice onAddInvoice={handleAddInvoice} clients={clients} />} />
          <Route path="/manage-clients" element={<ManageClients onAddClient={handleAddClient} clients={clients} />} />
          <Route path="/dashboard" element={<DashboardPage invoices={invoices} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
