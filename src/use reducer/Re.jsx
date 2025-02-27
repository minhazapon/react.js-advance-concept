
import { useEffect, useReducer } from "react"


function Re() {

    const initialState = {
        data: []
    }

    const reducer = (state, action) => {
        if (action.type === "FETCH SUCCESS") {
            return {
                data: action.payload
            }
        } else if (action.type === "FETCH ERROR") {
            return {
                data: []
            }
        } else {
            return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/minhazapon/react.js-advance-concept/refs/heads/main/public/re.json')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: "FETCH SUCCESS", payload: data })
            })
            .catch(() => {
                dispatch({ type: "FETCH ERROR" })
            })

    }, [])

    return (
        <div className=" mt-20 flex justify-center ">
            <div className=" grid  md:grid-cols-3 gap-5 ">
                {
                    state.data.map(state => <p key={state.id}>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title"> {state.name} </h2>
                                <p> {state.price} </p>
                                <p> {state.description} </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    )
}

export default Re
