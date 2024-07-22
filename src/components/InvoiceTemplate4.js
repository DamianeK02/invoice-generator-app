// src/InvoiceTemplate4.js
import React from 'react';
import { Typography, Box, Paper, List, ListItem, ListItemText, Grid } from '@mui/material';

const InvoiceTemplate4 = React.forwardRef((props, ref) => {
  const { invoiceData } = props;

  const calculateTotal = () => {
    return invoiceData.items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <Box ref={ref} sx={{ mt: 4, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>Invoice (Template 4)</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">From:</Typography>
            <Typography>{invoiceData.companyName}</Typography>
            <Typography>{invoiceData.companyAddress}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">To:</Typography>
            <Typography>{invoiceData.customerName}</Typography>
            <Typography>{invoiceData.customerAddress}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Paper variant="outlined" sx={{ mb: 4 }}>
        <List>
          {invoiceData.items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={item.description}
                secondary={`Quantity: ${item.quantity} | Price: ${item.price} | Total: ${item.quantity * item.price}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Typography variant="h5" sx={{ textAlign: 'right' }}>Total: {calculateTotal()}</Typography>
    </Box>
  );
});

export default InvoiceTemplate4;
