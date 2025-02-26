import { use } from "react"
import { ThemeContext } from "./ThemeProvider"


function Dark() {

    const { darkMode, handleDarkMode } = use(ThemeContext)


    return (
        <div className=" m-20 ">
            <p className=" text-center text-6xl font-bold text-black "> The Dark and Light Mode </p>

            <div className=" flex justify-center ">
                <button onClick={handleDarkMode}
                    className=" bg-black btn border-violet-600 text-violet-600 mt-10 w-[400px] ">
                    {darkMode === "dark" ? "switch to dark mode" : "switch to light mode"} </button>
            </div>

        </div>
    )
}

export default Dark
