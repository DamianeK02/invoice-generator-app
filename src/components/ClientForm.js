// src/ClientForm.js
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const ClientForm = ({ onAddClient }) => {
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddClient({ name: clientName, address: clientAddress });
    setClientName('');
    setClientAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Client Address"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">Add Client</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ClientForm;
