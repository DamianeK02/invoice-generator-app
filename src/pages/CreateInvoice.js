// src/pages/CreateInvoice.js
import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import InvoiceForm from '../components/InvoiceForm';
import InvoiceTemplate1 from '../components/InvoiceTemplate1';
import InvoiceTemplate2 from '../components/InvoiceTemplate2';
import InvoiceTemplate3 from '../components/InvoiceTemplate3';
import InvoiceTemplate4 from '../components/InvoiceTemplate4';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const CreateInvoice = ({ onAddInvoice, clients }) => {
  const [invoiceData, setInvoiceData] = useState(null);
  const [template, setTemplate] = useState('template1');
  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  const handleDownloadPDF = () => {
    const input = invoiceRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('invoice.pdf');
    });
  };

  const handleGenerateInvoice = (data) => {
    setInvoiceData(data);
    onAddInvoice(data);
  };

  const handleChangeTemplate = (event) => {
    setTemplate(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h3" gutterBottom>Create Invoice</Typography>
      <InvoiceForm onSubmit={handleGenerateInvoice} clients={clients} />
      {invoiceData && (
        <Box sx={{ mt: 4 }}>
          <FormControl variant="outlined" sx={{ minWidth: 200, mb: 2 }}>
            <InputLabel id="template-select-label">Select Template</InputLabel>
            <Select
              labelId="template-select-label"
              id="template-select"
              value={template}
              onChange={handleChangeTemplate}
              label="Select Template"
            >
              <MenuItem value="template1">Template 1</MenuItem>
              <MenuItem value="template2">Template 2</MenuItem>
              <MenuItem value="template3">Template 3</MenuItem>
              <MenuItem value="template4">Template 4</MenuItem>
            </Select>
          </FormControl>
          {template === 'template1' && <InvoiceTemplate1 ref={invoiceRef} invoiceData={invoiceData} />}
          {template === 'template2' && <InvoiceTemplate2 ref={invoiceRef} invoiceData={invoiceData} />}
          {template === 'template3' && <InvoiceTemplate3 ref={invoiceRef} invoiceData={invoiceData} />}
          {template === 'template4' && <InvoiceTemplate4 ref={invoiceRef} invoiceData={invoiceData} />}
          <Button variant="contained" color="primary" onClick={handlePrint} sx={{ mt: 2, mr: 2 }}>
            Print Invoice
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDownloadPDF} sx={{ mt: 2 }}>
            Download as PDF
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CreateInvoice;
