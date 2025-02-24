

function PDC1({ apon }) {

    const { name, number, location, profession } = apon

    return (
        <div className=" flex justify-center mt-10 ">
            <div className="card bg-base-100 w-96 border-[1px] ">
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p> {number} </p>
                    <p> {location} </p>
                    <p> {profession} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PDC1
