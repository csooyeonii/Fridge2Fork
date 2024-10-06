import React, { useState } from 'react';

function IngredientInput({ onAdd }) {
    const [ingredient, setIngredient] = useState('');

    const handleAdd = () => {
        if (ingredient) {
            onAdd(ingredient); // Calls the parent component to add ingredient
            setIngredient(''); // Clear input after adding
        }
    };

    return (
        <div>
            <input
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="Enter an ingredient"
            />
            <button onClick={handleAdd}>Add Ingredient</button>
        </div>
    );
}

export default IngredientInput;