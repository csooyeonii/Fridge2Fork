// controllers/ingredientController.js

const db = require('../config/db');

exports.addIngredient = (req, res) => {
    const { ingredient_name, expiration_date } = req.body;

    if (!ingredient_name) {
        return res.status(400).json({ message: 'Ingredient name is required.' });
    }

    const query = 'INSERT INTO user_ingredients (ingredient_name, expiration_date) VALUES (?, ?)';
    db.query(query, [ingredient_name, expiration_date || null], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to add ingredient.' });
        }
        res.status(201).json({ message: 'Ingredient added successfully.', ingredientId: results.insertId });
    });
};


exports.getAllIngredients = (req, res) => {
    const query = 'SELECT * FROM user_ingredients ORDER BY added_at DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to fetch ingredients.' });
        }
        res.status(200).json(results);
    });
};
