import { useId } from "react"


function UseId() {

    const id = useId()

    return (
        <div className=" m-20 flex justify-center ">
            <div>
                <p className=" text-center font-bold text-5xl text-black ">useID</p>
                <div className=" mt-10 ">
                    <form>
                        <label htmlFor={id + "number"} > Number: </label>
                        <br></br>
                        <input id={id + "number"} required className=" p-3 h-[50px] w-[600px] border-[1px]" placeholder="Name" name="number" type="number" />
                        <br></br>
                        <label htmlFor={id + "password"} > password: </label>
                        <br></br>
                        <input id={id + "password"} required className=" p-3 h-[50px] w-[600px] border-[1px]" placeholder="password" name="password" type="password" />
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
