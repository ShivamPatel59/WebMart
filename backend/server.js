const app =require('./app');
const dotenv = require('dotenv');
const connectDatabase=require("./config/database.js")

// Handling Uncaught Exceptions
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1);
});

// Config
dotenv.config({path:'backend/config/config.env'});

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