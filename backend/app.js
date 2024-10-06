const express = require('express');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});


app.get('/', (req, res) => {
    res.send('API is running');
});


app.get('/api/recipes', async (req, res) => {
    const ingredients = req.query.ingredients; // Assume ingredients is a comma-separated string
    try {
        const [rows] = await pool.query(
            `SELECT * FROM recipes WHERE ingredients IN (?)`, [ingredients]
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
