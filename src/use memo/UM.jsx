import { useMemo } from "react"
import { useState } from "react"

function UM() {

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(10)

    const memozation = useMemo(() => {

        let value = 0
        for (let i = 0; i < 10000; i++) {
            value += number
        }
        return value

    }, [number])


    return (
        <>
            <div className=" m-20 ">
                <p className=" text-center text-4xl font-bold text-black ">Increase Performance: {memozation} </p>
                <div className=" flex-col md:flex-row lg:flex-row- flex justify-center items-center gap-5 mt-10 ">
                    <button onClick={() => setCount(count + 1)} className=" btn w-[300px] bg-black border-cyan-400 text-white ">
                        Increase count: {count}  </button>
                    <button onClick={() => setNumber(number + 1)} className=" btn w-[300px] bg-black border-cyan-400 text-white ">
                        Increase number: {number}  </button>
                    <button onClick={() => setNumber(number === "")} className=" btn w-[300px] bg-black border-cyan-400 text-white ">
                        reset  </button>
                </div>
            </div >
        </>
    )
}

export default UM
