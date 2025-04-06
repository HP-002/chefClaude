import chefClaudeIcon from "../assets/chef-claude-icon.png"

export default function Header() {
    return (
        <header className="header">
            <img src={chefClaudeIcon} alt="Clef Claude Icon" className="header-icon" />
            <h1 className="header-title">Chef Claude</h1>
        </header>
    )
}