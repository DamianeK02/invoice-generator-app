# Invoice Generator App

## Overview
Invoice Generator App is a React-based web application designed to help users create, manage, and track invoices and clients. The application allows users to add and view invoices, manage client information, and access a dashboard for a summary of their data.

## Features
- **Create Invoices**: Generate and customize invoices with different templates.
- **Manage Clients**: Add and edit client information such as names and addresses.
- **Dashboard**: Get an overview of your invoices and client data in a comprehensive dashboard.
- **Export and Import Data**: Export invoice and client data to CSV files and import data from CSV files.

## Installation

### Prerequisites
- Node.js
- npm

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/DamianeK02/invoice-generator-app.git
    cd invoice-generator-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npm start
    ```

## Project Structure
```bash
invoice-generator-app
│ README.md
│ package.json
│ .gitignore
│
├───public
│ index.html
│ favicon.ico
│
├───src
│ App.js
│ App.css
│ config.js
│ index.js
├───src───components
│ ClientForm.js
│ Dashboard.js
│ Invoice.js
│ InvoiceForm.js
│ InvoiceTemplate1.js
│ InvoiceTemplate2.js
│ InvoiceTemplate3.js
│ InvoiceTemplate4.js
├───src───pages
│ CreateInvoice.js
│ DashboardPage.js
│ ManageClients.js
```

## Usage
1. Open the application in your browser.
2. Click on Create Invoice to generate a new invoice using one of the available templates.
3. Use Manage Clients to add or edit client information.
4. View the summary of your data in the Dashboard.
5. Export or import data as needed using the CSV functionalities.

## Dependencies
- **React**: A JavaScript library for building user interfaces.
- **@mui/material**: A library for Material UI components, providing a set of React components that implement Google's Material Design.
- **react-router-dom**: A collection of navigational components for React applications, enabling routing and page transitions.
- **react-to-print**: A library for printing React components.
- **html2canvas**: A library for taking screenshots of web content and converting it to images.
- **jspdf**: A library for generating PDF documents.
- **react-csv**: A library for exporting data to CSV files.
- **papaparse**: A library for parsing CSV files.

## Contributing
If you wish to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push your branch to your forked repository.
4. Create a pull request with a description of your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- React and other libraries used in this project for providing the tools to build the application.
