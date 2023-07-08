import React from "react"

function Header ({isDarkMode, onDarkModeClick}) {
    return (
        <header>
            <h2> Shopster </h2>
            <button onClick = {onDarkModeClick}>Toggle Dark mode{isDarkMode ? "Dark" : "Light"} Mode</button>
        </header>
    )
}

export default Header