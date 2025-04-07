import React from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientList from './IngredientList';
import { getRecipeFromMistral } from '../ai';

export default function Main() {
    const [ingredients, setIngredientList] = React.useState(["Spices", "Milk", "Eggs", "Flour", "Pasta"]);
    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
        const recipeMD = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMD);
    }

    let ingredientList = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        newIngredient !== "" && setIngredientList(prevList => [...prevList, newIngredient]);
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
            {ingredientList.length > 0 && <IngredientList
                ingredientList={ingredientList}
                getRecipe={getRecipe} />}
            {recipe != "" && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}