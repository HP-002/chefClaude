import React from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientList from './IngredientList';

export default function Main() {
    const [ingredients, setIngredientList] = React.useState(["A", "B", "C", "D"]);
    const [recipeShown, setRecipeShown] = React.useState(false);

    function getRecipe() {
        setRecipeShown(prevState => !prevState);
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
            {ingredientList.length > 0 && <IngredientList ingredientList={ingredientList} getRecipe={getRecipe}/>}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}