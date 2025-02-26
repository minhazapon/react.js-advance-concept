import { use } from "react"
import { ThemeContext2 } from "./ThemeProvider2"


function DeepDark() {

    const { darkMode, handleDarkMode } = use(ThemeContext2)

    return (
        <>

            <div>
                <div className={` h-svh p-32 ${darkMode === "dark" ? "bg-white" : "bg-black"} `}>
                    <div className=" ">
                        <p
                            className={` text-center text-6xl font-bold ${darkMode === "light" ? "text-yellow-700" : 'text-cyan-800'} `}>
                            The Dark and Light Mode </p>
                        <div className=" flex justify-center ">
                            <button onClick={handleDarkMode}
                                className=" bg-black btn border-violet-600 text-violet-600 mt-10 w-[400px]">
                                {darkMode === "dark" ? "dark mode" : "light mode"}
                            </button>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default DeepDark
