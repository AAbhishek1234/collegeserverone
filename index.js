import express from 'express';
import dotEnv from 'dotenv'
dotEnv.config()
import cors from 'cors';
import {configureRoutes} from'./configuration/configureRoutes.js';
import {connectDatabase} from './configuration/connectDatabase.js'
const app = express(); 
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors({
    origin: '*', // Allows requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allows all methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allows common headers
  }));
  app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

configureRoutes(app);
connectDatabase(); 


const PORT = 4000; // Ensure this matches what Postman is targeting
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});