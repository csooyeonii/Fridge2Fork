import React, { useState } from 'react';
import axios from 'axios';
import './IngredientInput.css';


/*
function IngredientInput({ onAdd }) {
    const [ingredient, setIngredient] = useState('');

    const handleAdd = () => {
        if (ingredient) {
            onAdd(ingredient); // Calls the parent component to add ingredient
            setIngredient(''); // Clear input after adding
        }
    };
    const handleKeyPress = (e) => { // Pressing enter key enters the ingredient
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return (
        <div className="ingredient-input">
            <input
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                onKeyPress={handleKeyPress}  // Listen for the Enter key
                placeholder="Enter an ingredient"

            />
            <button onClick={handleAdd} disabled={!ingredient}>Add Ingredient</button>
        </div>
    );
}
    */

const IngredientInput = ({ onAdd }) => {
    const [ingredient, setIngredient] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (ingredient.trim() === '') return;

        try {
            const response = await axios.post('http://localhost:5000/api/ingredients', {
                ingredient_name: ingredient,
            });
            onAdd(ingredient);
            setIngredient('');
        } catch (error) {
            console.error('Error adding ingredient:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                onKeyPress={handleKeyPress}  // Listen for the Enter key
                placeholder="Enter an ingredient"

            />
            <button type="submit">Add Ingredient</button>
        </form>
    );
};

export default IngredientInput;