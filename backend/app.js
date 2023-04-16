const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleeware = require('./middleware/error');


app.use(express.json());
app.use(cookieParser());

//Route Imports
const product = require('./routes/productRoutes');
const user=require('./routes/userRoute');
const order=require('./routes/orderRoute');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);

//Middleware to handle errors
app.use(errorMiddleeware);
  app.use(express.urlencoded({ extended: false }));
  app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
  });


module.exports = app;