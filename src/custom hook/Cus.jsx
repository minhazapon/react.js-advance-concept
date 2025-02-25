import { useContext } from "react"
import { UserContext } from "../context API/Context"

export const useAllContext = () => {

    const conApi = useContext(UserContext)
    return conApi

}