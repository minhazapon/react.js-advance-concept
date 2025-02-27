import { useReducer } from "react"


function Reducer() {

    const reducer = (state, action) => {

        if (action.type === "Increment") {
            return state + 1
        }
        if (action.type === "Decrement") {
            return state - 1
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <div className=" m-20 ">
                <div className=" flex justify-center items-center gap-5 ">
                    <button onClick={() => dispatch({ type: "Increment" })} className=" btn w-[400px] bg-black text-white ">Increment</button>
                    <p> {count} </p>
                    <button onClick={() => dispatch({ type: "Decrement" })} className=" btn w-[400px] bg-black text-white">Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Reducer
