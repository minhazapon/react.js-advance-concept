
import { use } from "react"
import { UserContext } from "../context API/Context"

export const useAllContext = () => {

    const conApi = use(UserContext)
    return conApi

}