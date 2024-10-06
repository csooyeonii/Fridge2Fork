// controllers/recipeController.js

const db = require('../config/db');
const { Configuration, OpenAIApi } = require('openai');


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


exports.addRecipe = (req, res) => {
    const { name, ingredients, instructions, nutrition_info } = req.body;

    if (!name || !ingredients || !instructions) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    const query = 'INSERT INTO recipes (name, ingredients, instructions, nutrition_info) VALUES (?, ?, ?, ?)';
    db.query(query, [name, ingredients, instructions, nutrition_info || null], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to add recipe.' });
        }
        res.status(201).json({ message: 'Recipe added successfully.', recipeId: results.insertId });
    });
};


exports.getAllRecipes = (req, res) => {
    const query = 'SELECT * FROM recipes ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to fetch recipes.' });
        }
        res.status(200).json(results);
    });
};


exports.generateRecipe = async (req, res) => {
    const { ingredients } = req.body;

    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
        return res.status(400).json({ message: 'Please provide a valid list of ingredients.' });
    }

    try {
        const prompt = `Suggest three creative recipes using the following ingredients: ${ingredients.join(', ')}. Provide the recipe name, ingredients list, and instructions.`;

        const response = await openai.createCompletion({
            model: 'text-davinci-003', 
            prompt: prompt,
            max_tokens: 300,
            temperature: 0.7,
        });

        const recipes = response.data.choices[0].text.trim();

        res.status(200).json({ recipes });
    } catch (error) {
        console.error('Error generating recipe:', error);
        res.status(500).json({ message: 'Failed to generate recipes.' });
    }
};

