const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
// const app =require('./app');
const dotenv = require('dotenv');
const connectDatabase=require("./config/database.js")
const cors = require('cors');

dotenv.config({path:'backend/config/config.env'});

const errorMiddleeware = require('./middleware/error');


app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Route Imports
const product = require('./routes/productRoutes');
const user=require('./routes/userRoute');
const order=require('./routes/orderRoute');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);

//Middleware to handle errors
app.use(errorMiddleeware);

// Handling Uncaught Exceptions
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1);
});

// Config

// Connecting to Database
connectDatabase();


app.listen(process.env.PORT ,()=>{
    console.log(`Server started at Port ${process.env.PORT}`);
});


// Unhandled Promise Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    server.close(()=>{
        process.exit(1);
    });
});


module.exports = app;