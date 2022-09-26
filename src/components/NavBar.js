import { FiUser, FiHome, FiBookOpen, FiDownload } from "react-icons/fi";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <div className="top-0 left-0 flex flex-row">
            <Link to="/">
                <div className="p-3.5 flex items-center space-x-3 hover:bg-slate-100 border-right">
                    <div className="pt-0.5">
                        <FiHome size={'1.25em'} />
                    </div>
                    <h3 className="font-serif text-sm">Home</h3>
                </div>
            </Link>
            <Link to="/about">
                <div className="p-3.5 flex items-center space-x-3 hover:bg-slate-100 border-right">
                    <div className="pt-0.5">
                        <FiUser size={'1.25em'} />
                    </div>
                    <h3 className="font-serif text-sm">About Me</h3>
                </div>
            </Link>
            <Link to="/projects">
                <div className="p-3.5 flex items-center space-x-3 hover:bg-slate-100 border-right">
                    <div className="pt-0.5">
                        <FiBookOpen size={'1.25em'} />
                    </div>
                    <h3 className="font-serif text-sm">Projects</h3>
                </div>
            </Link>
            <a href='nicholas_rosenau_resume.pdf' download>
                <div className="p-3.5 flex items-center space-x-3 hover:bg-slate-100">
                    <div className="pt-0.5">
                        <FiDownload size={'1.25em'} />
                    </div>
                    <h3 className="font-serif text-sm">Download Resume</h3>
                </div>
            </a>
            </div>
            </div>
    )
}

export default NavBar