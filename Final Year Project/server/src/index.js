require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api', routes); // We will define routes in src/routes.js

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
