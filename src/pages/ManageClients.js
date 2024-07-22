// src/pages/ManageClients.js
import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import ClientForm from '../components/ClientForm';
import { CSVLink } from 'react-csv';

const ManageClients = ({ onAddClient, clients }) => {
  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Address', key: 'address' },
  ];

  return (
    <Box>
      <Typography variant="h3" gutterBottom>Manage Clients</Typography>
      <ClientForm onAddClient={onAddClient} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Clients List:</Typography>
        {clients.map((client, index) => (
          <Typography key={index}>{client.name} - {client.address}</Typography>
        ))}
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          <CSVLink data={clients} headers={headers} filename={"clients.csv"} style={{ color: 'white', textDecoration: 'none' }}>
            Export CSV
          </CSVLink>
        </Button>
      </Box>
    </Box>
  );
};

export default ManageClients;
