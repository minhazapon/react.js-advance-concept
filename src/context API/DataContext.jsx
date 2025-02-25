import { useContext } from "react"
import { UserContext } from "./Context"


function Data() {

    const darshana = useContext(UserContext)

    return (
        <div>
            {darshana.map((place) => (
                <div key={place.id}>
                    <div className="card bg-base-100 w-96 shadow-xl">
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
    )
}

export default Data
