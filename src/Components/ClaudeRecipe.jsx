import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {
    return (
        <div className="suggested-recipe-container">
            <h2>Claude Chef Recommends</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </div>
    )
}