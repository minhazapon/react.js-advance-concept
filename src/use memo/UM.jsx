import { useState } from "react"


function UM() {

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(10)


    return (
        <div className=" m-20 ">

            <p className=" text-center text-4xl font-bold text-black ">Increase Performance: </p>

            <div className=" flex justify-center items-center gap-5 mt-10 ">
                <button className=" btn w-[300px] bg-black border-cyan-400 text-white ">
                    Increase count:  </button>
                <button className=" btn w-[300px] bg-black border-cyan-400 text-white ">
                    Increase number:   </button>
            </div>

        </div>
    )
}

export default UM
