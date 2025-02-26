import { useState } from "react";
import { createContext } from "react"

export const ThemeContext = createContext();

function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState('dark')

    const handleDarkMode = () => {
        return setDarkMode((preTheme) => (preTheme === "dark" ? "light" : "dark"))
    }

    return (
        <>
            <div>
                <ThemeContext.Provider value={{ darkMode, handleDarkMode }}>
                    {children}
                </ThemeContext.Provider>
            </div>
        </>
    )
}

export default ThemeProvider
