// routes/ingredientRoutes.js

const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');

// Add a new ingredient
router.post('/', ingredientController.addIngredient);

// Get all ingredients
router.get('/', ingredientController.getAllIngredients);

module.exports = router;
