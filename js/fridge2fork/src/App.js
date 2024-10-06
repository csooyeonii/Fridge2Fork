import React, { useState } from 'react';
import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';
import ImageUpload from './components/ImageUpload';
import './App.css';
import logo from './logo.webp';
import axios from 'axios';

function App() {
    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const handleAddIngredient = (ingredient) => {
        setIngredients((prev) => [...prev, ingredient]);
    };

    const handleFileUpload = (ingredient) => {
        setIngredients((prev) => [...prev, ingredient]);
    };

    const generateRecipes = async () => {
        if (ingredients.length === 0) return;

        try {
            const response = await axios.post('http://localhost:5000/api/recipes/generate', {
                ingredients: ingredients,
            });
            setRecipes(response.data.recipes.split('\n').filter(line => line.trim() !== ''));
        } catch (error) {
            console.error('Error generating recipes:', error);
        }
    };

    return (
        <div>
            <h1>
                Fridge2Fork
                <img
                    src={logo}
                    alt="Fridge2Fork Logo"
                    style={{ width: '100px', height: '100px', marginLeft: '10px' }}
                />
            </h1>
            <IngredientInput onAdd={handleAddIngredient} />
            <ImageUpload onUpload={handleFileUpload} />
            <h2>Ingredients:</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <button onClick={generateRecipes}>Generate Recipes</button>
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default App;
