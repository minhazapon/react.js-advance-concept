// import { useContext } from "react"
// import { UserContext } from "./Context"
import { useAllContext } from "../custom hook/Cus"

function Data() {

    const darshana = useAllContext()

    return (

        <div className=" flex justify-center m-20 ">
            <div className=" grid  md:grid-cols-3 gap-5 " >
                {darshana.map((place) => (
                    <div key={place.id}>
                        <div className="card bg-base-100 h-[400px] w-96 border-[1px]">
                            <figure>
                                <img
                                    src={place.image} alt={place.touristPlace} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Location: {place.location}
                                </h2>
                                <p> countryName: {place.countryName}</p>
                                <p>City Age: {place.cityAge} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </div>
    )
}

export default Data
