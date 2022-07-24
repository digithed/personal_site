import { FiUser, FiHome } from "react-icons/fi";
import {Link} from "react-router-dom";

function SideBar() {
    return (
        <div className='navBar flex flex-col bg-slate-700 shadow-xl'>
            <h1 className="text-center pt-5 font-serif text-white">nickrosenau.com</h1>
            <Link to="/">
            <div className="mt-10 pt-2 pb-2 flex flex-row hover:bg-orange-200 ">
                <div className="pl-3 pt-0.5 text-white">
                    <FiHome size={'1.25em'} />
                </div>
                <h3 className="pl-3 font-serif text-white text-sm">Home</h3>
            </div>
            </Link>
            <Link to="/about">
            <div className="mt-5 pt-2 pb-2 flex flex-row hover:text-black hover:bg-orange-200">
                <div className="pl-3 pt-0.5 text-white">
                    <FiUser size={'1.25em'} />
                </div>
                <h3 className="pl-3 font-serif text-white text-sm">About Me</h3>
            </div>
            </Link>
        </div>
    )
}

export default SideBar