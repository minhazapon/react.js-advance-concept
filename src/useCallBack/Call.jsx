import { useState } from "react"
import ChildCall from "./ChildCall"


function Call() {

    const [inCe, setSetIn] = useState(0)

    const handleIncrement = () => {

        setSetIn(inCe + 1)

    }

    return (
        <div className="m-20">

            <div>

                <p className=" text-center text-xl font-serif "> {inCe} </p>
                <div>
                    <ChildCall onIncrement={handleIncrement} ></ChildCall>
                </div>
            </div>

        </div>
    )
}

export default Call
