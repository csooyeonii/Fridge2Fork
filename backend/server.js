// server.js
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to DB
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Set up test route
app.get('/', (req, res) => {
    res.send('Recipe API is running');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
