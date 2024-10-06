// routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Add a new recipe
router.post('/', recipeController.addRecipe);

// Get all recipes
router.get('/', recipeController.getAllRecipes);

// Generate recipe suggestions using GPT-4
router.post('/generate', recipeController.generateRecipe);

module.exports = router;
