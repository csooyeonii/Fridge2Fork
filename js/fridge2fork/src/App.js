import React, { useState } from 'react';
import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';
import ImageUpload from './components/ImageUpload';
import ImageUploadDropzone from './components/ImageUploadDropzone';
import './App.css';
import logo from './logo.webp';


function App() {
    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([
        { name: 'Pasta', description: 'A simple pasta recipe.' },
        { name: 'Salad', description: 'A healthy green salad.' }
    ]);

    const handleAddIngredient = (ingredient) => {
        setIngredients([...ingredients, ingredient]);
    };

    const handleFileUpload = (file) => {
        console.log('Uploaded file:', file);    // send file to the backend for image recognition
    };

    return (
        <div className="app-container">
            <h1 className ="app-title">
                Fridge2Fork
                <img
                    src={logo}
                    alt="Fridge2Fork Logo"
                    style={{width: '100px', height: '100px', marginRight: '10px'}}
                />
            </h1>
            <IngredientInput onAdd={handleAddIngredient}/>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <ImageUploadDropzone/>

            <RecipeList recipes={recipes}/>
        </div>
    );
}

export default App;
