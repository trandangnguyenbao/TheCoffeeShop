import express from "express";
// import Products from "./data/ProductForCatalog.js";
// import Catalog from './data/Catalog.js';
import dotenv from 'dotenv';
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";

dotenv.config();
connectDatabase()
const app = express();

// LOAD PRODUCT FROM SERVER
// app.get('/api/collections/:path', (req, res) => {
//     res.json(Products)
// });

// SINGLE PRODUCT FROM SERVER
// app.get('/api/product/:path_name', (req, res) => {
//     const product = Products.find((p) => p.path_name === req.params.path_name);
//     res.json(product);
// });

// LOAD CATALOG FROM SERVER
// app.get('/api/catalog', (req, res) => {
//     res.json(Catalog);
// });

// API 
app.use('/api/import', ImportData);


app.get('/', (req, res) => {
    res.send('API is Running...');
})

const PORT = process.env.PORT || 10000;

app.listen(PORT, console.log(`Server Running in Port ${PORT}`));