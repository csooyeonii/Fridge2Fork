import React, { useState } from 'react';
import './IngredientInput.css';


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

export default IngredientInput;