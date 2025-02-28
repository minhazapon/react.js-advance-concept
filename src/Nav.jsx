import { NavLink } from "react-router-dom"

function Nav() {

    const navZ = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/id'>useID</NavLink></li>
        <li><NavLink to='/pd'>Props Driling</NavLink></li>
        <li><NavLink to='/dark'>Dark Mode</NavLink></li>
        <li><NavLink to='/re'>use Reducer</NavLink></li>
        <li><NavLink to='/memo'>React.memo</NavLink></li>
        <li><NavLink to='/um'>use Memo</NavLink></li>
        <li><NavLink to='/call'>use Callback</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navZ}
                        </ul>
                    </div>
                    <div className=" flex items-center gap-2 ">
                        <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/10303/10303368.png" alt="" />
                        <a className="text-xl">React Advance Concept</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navZ}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
