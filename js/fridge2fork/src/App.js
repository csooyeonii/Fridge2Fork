import React, { useState } from 'react';
import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';
import ImageUpload from './components/ImageUpload';
import ImageUploadDropzone from './components/ImageUploadDropzone';
import './App.css';
import logo from './logo.webp';
import axios from 'axios';

function App() {
    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const handleAddIngredient = (ingredient) => {
        setIngredients((prev) => [...prev, ingredient]);
    };

<<<<<<< HEAD
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
=======
    const handleFileUpload = (file) => {
        console.log('Uploaded file:', file);    // send file to the backend for image recognition
    };

    return (
        <div className="app-container">
            <h1 className ="app-title">
>>>>>>> 38e05217974863bdcf708f50215fd4d9365f536a
                Fridge2Fork
                <img
                    src={logo}
                    alt="Fridge2Fork Logo"
                    style={{ width: '100px', height: '100px', marginLeft: '10px' }}
                />
            </h1>
<<<<<<< HEAD
            <IngredientInput onAdd={handleAddIngredient} />
            <ImageUpload onUpload={handleFileUpload} />
            <h2>Ingredients:</h2>
=======
            <IngredientInput onAdd={handleAddIngredient}/>
>>>>>>> 38e05217974863bdcf708f50215fd4d9365f536a
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
<<<<<<< HEAD
            <button onClick={generateRecipes}>Generate Recipes</button>
            <RecipeList recipes={recipes} />
=======

            <ImageUploadDropzone/>

            <RecipeList recipes={recipes}/>
>>>>>>> 38e05217974863bdcf708f50215fd4d9365f536a
        </div>
    );
}

export default App;
