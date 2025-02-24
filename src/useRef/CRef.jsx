


function CRef({ ref }) {
    return (
        <div className=" flex justify-center items-center gap-5 ">
            <input ref={ref} required className=" p-3 h-[50px] w-[600px] border-[1px]" placeholder="Name" name="name" type="text" />
            <br></br>
            <input className=" btn p-3 h-[50px] w-[600px] bg-black text-white rounded-none " type="submit" value="Submit" />
            <br></br>
        </div>
    )
}

export default CRef
