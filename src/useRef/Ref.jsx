import { useRef } from "react"

function Ref() {

    const name = useRef("")
    const email = useRef("")
    const number = useRef("")
    const password = useRef("")

    const handleRefForm = (e) => {
        e.preventDefault()
        console.log(name.current.value)
        console.log(email.current.value)
        console.log(number.current.value)
        console.log(password.current.value)
    }

    return (
        <div className=" m-20 ">
            <p className=" text-center mt-10 font-bold text-5xl text-black ">useEffect work</p>
            <div className=" mt-10 flex justify-center ">
                <div>
                    <form onSubmit={handleRefForm}>
                        <input required ref={name} className=" p-3 h-[50px] w-[600px] border-[1px]" placeholder="Name" name="name" type="text" />
                        <br></br>
                        <input required ref={email} className=" p-3 h-[50px] w-[600px] border-[1px]" placeholder="Name" name="email" type="email" />
                        <br></br>
                        <input required ref={number} className=" p-3 h-[50px] w-[600px] border-[1px]" placeholder="Name" name="number" type="number" />
                        <br></br>
                        <input required ref={password} className=" p-3 h-[50px] w-[600px] border-[1px]" placeholder="Name" name="password" type="password" />
                        <br></br>
                        <input className=" btn p-3 h-[50px] w-[600px] bg-black text-white rounded-none " type="submit" value="Submit" />
                        <br></br>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Ref
