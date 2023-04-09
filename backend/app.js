const express = require('express');
const app = express();


const errorMiddleeware = require('./middleware/error');


app.use(express.json());

//Route Imports
const product = require('./routes/productRoutes');

app.use('/api/v1', product);

//Middleware to handle errors
app.use(errorMiddleeware);

module.exports = app;