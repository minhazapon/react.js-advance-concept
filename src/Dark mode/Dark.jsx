import { use } from "react"
import ThemeProvider, { ThemeContext } from "./ThemeProvider"


function Dark() {

    const { darkMode, handleDarkMode } = use(ThemeContext)


    return (

        <ThemeProvider>

            <div className={` h-screen ${darkMode === "dark" ? "bg-black" : "bg-white"} p-20 `}>
                <div className=" ">
                    <p className={`${darkMode === "light" ? "text-black" : "text-white"} text-center text-6xl font-bold  text-black`}> The Dark and Light Mode </p>
                    <div className=" flex justify-center ">
                        <button onClick={handleDarkMode}
                            className=" bg-black btn border-violet-600 text-violet-600 mt-10 w-[400px]">
                            {darkMode === "dark" ? "switch to light mode" : "switch to dark mode"} </button>
                    </div>
                </div>
            </div>

        </ThemeProvider>


    )
}

export default Dark
