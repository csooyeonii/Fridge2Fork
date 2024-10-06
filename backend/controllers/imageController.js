// controllers/imageController.js
const vision = require('@google-cloud/vision');
const db = require('../config/db');
const fs = require('fs');
const path = require('path');

// Google Cloud Vision client -- paid?
const client = new vision.ImageAnnotatorClient({
    keyFilename: process.env.GOOGLE_CLOUD_KEYFILE_PATH,
});

// Upload and process image
exports.uploadImage = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No image uploaded.' });
    }

    const imagePath = path.join(__dirname, '..', req.file.path);

    try {
        // Perform text detection
        const [result] = await client.textDetection(imagePath);
        const detections = result.textAnnotations;
        if (!detections || detections.length === 0) {
            return res.status(200).json({ ingredients: [] });
        }

        const detectedText = detections[0].description;
        const ingredients = parseIngredients(detectedText);

        // Optionally, add detected ingredients to the database
        // ingredients.forEach(ingredient => {
        //     db.query('INSERT INTO user_ingredients (ingredient_name) VALUES (?)', [ingredient], (err, results) => {
        //         if (err) console.error(err);
        //     });
        // });

        // Delete the image after processing
        fs.unlinkSync(imagePath);

        res.status(200).json({ ingredients });
    } catch (error) {
        console.error('Error processing image:', error);
        res.status(500).json({ message: 'Failed to process image.' });
    }
};

// Helper function to parse ingredients from detected text
const parseIngredients = (text) => {
    // Simple parsing: split by newlines and commas
    const lines = text.split('\n');
    let ingredients = [];

    lines.forEach(line => {
        const items = line.split(',');
        items.forEach(item => {
            const trimmed = item.trim().toLowerCase();
            if (trimmed.length > 0) {
                ingredients.push(trimmed);
            }
        });
    });

    // Remove duplicates
    ingredients = [...new Set(ingredients)];

    return ingredients;
};
