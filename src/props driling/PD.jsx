import PDC from "./PDC"


function PD() {

    const apon = {

        name: "minhazul abedin apon",
        number: 1950374409,
        location: 'jhenaidah',
        profession: "software developer"

    }

    return (
        <div className=" m-20 ">
            <p className=" text-center text-5xl font-bold text-black ">Props Driling Together</p>
            <PDC apon={apon}></PDC>
        </div>
    )
}

export default PD
