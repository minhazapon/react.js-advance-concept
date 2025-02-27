
import { useReducer } from "react"


function Re() {

    const initialState = {
        food: null
    }

    const reducer = (state, action) => {

        if (action.type === " FETCH SUCCESS ") {

            return {
                data: action.payload
            }

        } else if (action.type === "FETCH ERROR") {

            return {
                data: null
            }

        } else {
            return state
        }


    }


    const [state, dispatch] = useReducer(reducer, initialState)




    return (
        <div className=" mt-20 ">
            <div>

                <p> Data Show space </p>
            </div>
        </div>
    )
}

export default Re
