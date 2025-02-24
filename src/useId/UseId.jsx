

function UseId() {
    return (
        <div className=" m-20 flex justify-center ">
            <div>
                <p className=" text-center font-bold text-5xl text-black ">useID</p>

                <div className=" mt-10 ">
                    <form>

                        <input required className=" p-3 h-[50px] w-[600px] border-[1px]" placeholder="Name" name="number" type="number" />
                        <br></br>
                        <input required className=" p-3 h-[50px] w-[600px] border-[1px]" placeholder="password" name="password" type="password" />
                        <br></br>
                        <input className=" btn p-3 h-[50px] w-[600px] bg-black text-white rounded-none " type="submit" value="Submit" />
                        <br></br>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default UseId
