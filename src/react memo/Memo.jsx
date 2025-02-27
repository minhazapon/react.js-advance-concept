import { useState } from "react"
import ChildMemo from "./ChildMemo"


function Memo() {

    const [count, setData] = useState(0)

    return (
        <div>

            <div className=" flex justify-center items-center mt-10">
                <p> {count} </p>
                <button onClick={() => setData((preValue) => preValue + 1)} className=" btn ">increment</button>
            </div>

            <ChildMemo name="apon" ></ChildMemo>

        </div>
    )
}

export default Memo
