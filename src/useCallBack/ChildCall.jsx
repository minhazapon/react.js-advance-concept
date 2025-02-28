


function ChildCall({ onIncrement }) {

    console.log("child is re-creating")

    return (
        <div>
            <div className=" flex justify-center ">
                <button onClick={onIncrement} className=" btn w-[600px] bg-black text-cyan-400 border-[1px] border-cyan-400 ">Increment</button>
            </div>
        </div>
    )
}

export default ChildCall
