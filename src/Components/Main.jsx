import React from 'react';

export default function Main() {
    const [ingredientList, setIngredientList] = React.useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient");
        setIngredientList(prevList => [...prevList, newIngredient]);
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. Milk"
                    aria-label="Add Ingredient" 
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul className="ingredient-list">
                {ingredientList.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </main>
    )
}