import { FiUser, FiHome, FiBookOpen } from "react-icons/fi";
import {Link} from "react-router-dom";

function SideBar() {
    return (
        <div className="relative z-100">
            <div className="top-0 left-0 flex flex-row">
            <Link to="/">
                <div className="p-5 flex flex-row">
                    <div className="pl-3 pt-0.5">
                        <FiHome size={'1.25em'} />
                    </div>
                    <h3 className="pl-3 font-serif text-sm">Home</h3>
                </div>
            </Link>
            <Link to="/about">
                <div className="p-5 flex flex-row">
                    <div className="pl-3 pt-0.5">
                        <FiUser size={'1.25em'} />
                    </div>
                    <h3 className="pl-3 font-serif text-sm">About Me</h3>
                </div>
            </Link>
            <Link to="/projects">
                <div className="p-5 flex flex-row">
                    <div className="pl-3 pt-0.5">
                        <FiBookOpen size={'1.25em'} />
                    </div>
                    <h3 className="pl-3 font-serif text-sm">Projects</h3>
                </div>
            </Link>
            </div>
            </div>
    )
}

export default SideBar