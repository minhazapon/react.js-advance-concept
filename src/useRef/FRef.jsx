import { useRef } from "react"
import CRef from "./CRef"


function FRef() {

    const name = useRef("")

    const handleForm = (e) => {
        e.preventDefault()
    }
    return (
        <div className=" m-20">
            <div>
                <form onSubmit={handleForm}>
                    <CRef ref={name}></CRef>
                </form>
            </div>
        </div>
    )
}

export default FRef
