import { useState } from "react"
import { createContext } from "react"


export const ThemeContext2 = createContext()

function ColorThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState("dark")

    const handleDarkMode = () => {
        return setDarkMode((nextTheme) => (nextTheme === "dark" ? "light" : "dark"))
    }

    return (
        <>
            <div>
                <ThemeContext2.Provider value={{ darkMode, handleDarkMode }}>
                    {children}
                </ThemeContext2.Provider>
            </div>
        </>
    )
}

export default ColorThemeProvider
