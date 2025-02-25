import { createContext } from "react"
import Data from "./DataContext"
import { useState } from "react";

export const UserContext = createContext();

function Context() {

    const [darshana, setDarshana] = useState([
        {
            "id": 1,
            "image": "https://example.com/darshana-railway.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Established in 1862",
            "touristPlace": "Darshana Railway Station"
        },
        {
            "id": 2,
            "image": "https://example.com/darshana-border.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Developed in the British Era",
            "touristPlace": "Darshana Land Port"
        },
        {
            "id": 3,
            "image": "https://example.com/mathabhanga-river.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Ancient river-based region",
            "touristPlace": "Mathabhanga River"
        },
        {
            "id": 4,
            "image": "https://example.com/railway-bridge.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Built during British Rule",
            "touristPlace": "Darshana Railway Bridge"
        },
        {
            "id": 5,
            "image": "https://example.com/benapole-border.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Modernized after 1971",
            "touristPlace": "Benapole Border (Nearby)"
        },
        {
            "id": 6,
            "image": "https://example.com/sugar-mills.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Established in 1938",
            "touristPlace": "Carew & Co. (Bangladesh) Ltd."
        },
        {
            "id": 7,
            "image": "https://example.com/darshana-mosque.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Historical Islamic Architecture",
            "touristPlace": "Darshana Central Mosque"
        },
        {
            "id": 8,
            "image": "https://example.com/darshana-bazar.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Commercial hub since 1900s",
            "touristPlace": "Darshana Bazar"
        },
        {
            "id": 9,
            "image": "https://example.com/darshana-park.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Developed in recent years",
            "touristPlace": "Darshana Eco Park"
        },
        {
            "id": 10,
            "image": "https://example.com/darshana-school.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Founded in early 1900s",
            "touristPlace": "Darshana Govt. High School"
        }
    ]
    )


    return (
        <div>
            <UserContext.Provider value={darshana} >
                <Data></Data>
            </UserContext.Provider>
        </div>
    )
}

export default Context
