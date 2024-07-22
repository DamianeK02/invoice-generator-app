// src/InvoiceTemplate2.js
import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';

const InvoiceTemplate2 = React.forwardRef((props, ref) => {
  const { invoiceData } = props;

  const calculateTotal = () => {
    return invoiceData.items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <Box ref={ref} sx={{ mt: 4, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>Invoice (Template 2)</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6">From:</Typography>
          <Typography>{invoiceData.companyName}</Typography>
          <Typography>{invoiceData.companyAddress}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">To:</Typography>
          <Typography>{invoiceData.customerName}</Typography>
          <Typography>{invoiceData.customerAddress}</Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Paper variant="outlined">
          <Box sx={{ p: 2 }}>
            {invoiceData.items.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography>{item.description}</Typography>
                <Typography>{item.quantity} x {item.price}</Typography>
                <Typography>{item.quantity * item.price}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>
        <Typography variant="h5" sx={{ mt: 4, textAlign: 'right' }}>Total: {calculateTotal()}</Typography>
      </Box>
    </Box>
  );
});

export default InvoiceTemplate2;
