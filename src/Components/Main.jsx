import React from 'react';

export default function Main() {
    const [ingredients, setIngredientList] = React.useState([]);

    let ingredientList = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredientList(prevList => [...prevList, newIngredient]);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. Milk"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {ingredientList.length > 0 &&
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>

                    {ingredientList.length >= 4 &&
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients</p>
                            </div>
                            <button>Get a Recipe</button>
                        </div>}
                </section>}
        </main>
    )
}