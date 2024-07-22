// src/InvoiceTemplate1.js
import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const InvoiceTemplate1 = React.forwardRef((props, ref) => {
  const { invoiceData } = props;

  const calculateTotal = () => {
    return invoiceData.items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <Box ref={ref} sx={{ mt: 4, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>Invoice (Template 1)</Typography>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">From:</Typography>
        <Typography>{invoiceData.companyName}</Typography>
        <Typography>{invoiceData.companyAddress}</Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">To:</Typography>
        <Typography>{invoiceData.customerName}</Typography>
        <Typography>{invoiceData.customerAddress}</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoiceData.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.quantity * item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" sx={{ mt: 4 }}>Total: {calculateTotal()}</Typography>
    </Box>
  );
});

export default InvoiceTemplate1;
