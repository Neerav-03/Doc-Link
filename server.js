const express = require('express');
//const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path=require('path')


dotenv.config();

connectDB();
//rest object
const app=express();

//middlewares
app.use(express.json())
//app.use(morgan('dev'))

//routes
// app.get('/',(req,res)=>{
//     res.status(200).send({
//         message: "server running",
//     });
// });
app.use('/api/v1/user',require('./routes/userRoutes')); 
app.use('/api/v1/admin',require('./routes/adminRoutes'));
app.use('/api/v1/doctor',require('./routes/doctorRoutes'));

//static files
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})
//listen port
const port=process.env.PORT||8080
const node=process.env.NODE_MODE
app.listen(port,()=>{console.log(`Server Running in ${node} Mode on port ${port}`.bgCyan.white);})