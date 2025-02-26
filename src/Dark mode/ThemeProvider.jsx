import { useState } from "react";
import { createContext } from "react"

export const ThemeContext = createContext();

function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState('Dark')

    return (
        <>
            <div>
                <ThemeContext.Provider value={darkMode}>
                    {children}
                </ThemeContext.Provider>
            </div>
        </>
    )
}

export default ThemeProvider
