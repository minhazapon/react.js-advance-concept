import { createContext } from "react"
import Data from "./DataContext"
import { useState } from "react";

export const UserContext = createContext();

function Context() {

    const [darshana, setDarshana] = useState([
        {
            "id": 1,
            "image": "https://www.shutterstock.com/editorial/image-editorial/MazeU74bMfTbce21MDAwNw==/moitree-express-darshana-railway-junction-newly-launched-550nw-3560055a.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Established in 1862",
            "touristPlace": "Darshana Railway Station"
        },
        {
            "id": 2,
            "image": "https://newsfromnadia.in/wp-content/uploads/2022/12/gederoad1.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Developed in the British Era",
            "touristPlace": "Darshana Land Port"
        },
        {
            "id": 3,
            "image": "https://cdn.daily-sun.com/public/news_images/2024/05/13/1715538411-d7d19abc1aacdcadd112e78b4bb85396.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Ancient river-based region",
            "touristPlace": "Mathabhanga River"
        },
        {
            "id": 4,
            "image": "https://www.researchgate.net/publication/281234845/figure/fig3/AS:391490296664064@1470349968130/Bhairab-Railway-Bridge-at-the-left-hand-side-UK-Bangladesh-Friendship-Bridge-constructed.png",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Built during British Rule",
            "touristPlace": "Darshana Railway Bridge"
        },
        {
            "id": 5,
            "image": "https://cdn.daily-sun.com/public/news_images/2017/10/03/Benapole_boarder.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Modernized after 1971",
            "touristPlace": "Benapole Border (Nearby)"
        },
        {
            "id": 6,
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Darsana_Distillery_at_Carew_%26_Co.jpg/1200px-Darsana_Distillery_at_Carew_%26_Co.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Established in 1938",
            "touristPlace": "Carew & Co. (Bangladesh) Ltd."
        },
        {
            "id": 7,
            "image": "https://www.cholozai.com/images/gholdari-shahi-mosque.webp",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Historical Islamic Architecture",
            "touristPlace": "Darshana Central Mosque"
        },
        {
            "id": 8,
            "image": "https://c8.alamy.com/comp/2WFR5JJ/sarojganj-chuadanga-bangladesh-1st-feb-2024-vendors-are-selling-date-palm-jaggery-at-sarojganj-jaggery-market-in-chuadanga-the-sellers-bring-jaggery-in-big-pots-made-of-clay-to-sell-a-jar-contains-15-kg-jaggery-during-winter-the-juice-is-collected-from-the-date-palm-tree-and-boiled-in-a-big-pot-for-3-to-4-hours-at-some-point-the-juice-thickens-and-becomes-molasses-the-production-and-sale-of-jaggery-takes-place-from-november-to-february-jaggery-is-sold-at-tk-200-2-to-tk-250-25-per-kg-credit-image-syed-mahabubul-kaderzuma-press-wire-editorial-usage-only!-not-for-c-2WFR5JJ.jpg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Commercial hub since 1900s",
            "touristPlace": "Darshana Bazar"
        },
        {
            "id": 9,
            "image": "https://i.ytimg.com/vi/pAJJn_gDmxo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASQ2z5Hs5l7wsqWQS2PRjGaiY5tg",
            "location": "Darshana, Chuadanga, Bangladesh",
            "countryName": "Bangladesh",
            "cityAge": "Developed in recent years",
            "touristPlace": "Darshana Eco Park"
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
