export default function Main() {
    return (
        <main>
            <forms className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. Milk"
                    aria-label="Add Ingredient" 
                />
                <button>Add Ingredient</button>
            </forms>
        </main>
    )
}