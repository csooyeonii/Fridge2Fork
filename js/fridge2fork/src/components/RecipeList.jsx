import React from 'react';

function RecipeList({ recipes }) {
    return (
        <div>
            {recipes.length === 0 ? (
                <p>No recipes available. Add some ingredients to see suggestions!</p>
            ) : (
                recipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <h3>{recipe.name}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default RecipeList;
