// src/components/InvoiceForm.js
import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const InvoiceForm = ({ onSubmit, clients }) => {
  const [selectedClient, setSelectedClient] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [items, setItems] = useState([{ description: '', quantity: 1, price: 0 }]);
  const [invoiceNumber, setInvoiceNumber] = useState(1);

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { description: '', quantity: 1, price: 0 }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const client = clients.find(client => client.name === selectedClient);
    onSubmit({
      invoiceNumber,
      companyName,
      companyAddress,
      customerName: client ? client.name : customerName,
      customerAddress: client ? client.address : customerAddress,
      items,
    });
    setInvoiceNumber(invoiceNumber + 1); // Increment invoice number
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Company Address"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="client-select-label">Select Client</InputLabel>
            <Select
              labelId="client-select-label"
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
            >
              {clients.map((client, index) => (
                <MenuItem key={index} value={client.name}>
                  {client.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {selectedClient === '' && (
          <>
            <Grid item xs={12}>
              <TextField
                label="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Customer Address"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                fullWidth
                required
              />
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <TextField
            label="Invoice Number"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            fullWidth
            required
            disabled
          />
        </Grid>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={6}>
              <TextField
                label="Description"
                value={item.description}
                onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Quantity"
                type="number"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Price"
                type="number"
                value={item.price}
                onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={2}>
              <Button onClick={() => handleRemoveItem(index)}>Remove</Button>
            </Grid>
          </React.Fragment>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleAddItem}>Add Item</Button>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="secondary">Generate Invoice</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default InvoiceForm;
