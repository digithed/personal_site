import { FiUser } from "react-icons/fi";

function SideBar() {
    return (
        <div className='navBar flex flex-col bg-slate-700 shadow-xl'>
            <h1 className="text-center pt-3 font-serif text-white">Nick Rosenau</h1>
            <div className="mt-5 pt-3 pb-3 flex flex-row hover:bg-slate-800">
                <div className="pl-3">
                    <FiUser size={'1.5em'} />
                </div>
                <h3 className="pl-3 font-serif text-white">About Me</h3>
            </div>
        </div>
    )
}

export default SideBar