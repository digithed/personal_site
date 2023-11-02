import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function ActionBar() {
  return(
    <div className="flex flex-col pt-5 space-y-4 fixed z-10 ml-2">
    <div
      style={{ height: "40vh" }}
      className="ml-3 border-l-2 border-blue-300"
    ></div>
    {/* <a href="http://localhost:3000">
      <img
            alt="logo"
            src="logo.jpeg"
            className="hover:scale-125 text-blue-300"
            style={{ width: "30px", height: "30px" }}
          />
    </a> */}
    <a href="https://github.com/digithed">
      <AiFillGithub
        className="hover:scale-125 text-blue-300"
        style={{ width: "30px", height: "30px" }}
      />
    </a>
    <a href="https://www.linkedin.com/in/nick-rosenau-2b0614b3/">
      <AiFillLinkedin
        className="hover:scale-125 text-blue-100"
        style={{ width: "30px", height: "30px" }}
      />
    </a>
    <a href="mailto: nicholas.c.rosenau@gmail.com">
      <span className="flex h-5 w-5 float-right">
        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-orange-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-400"></span>
      </span>
      <FiMail
        className="shadow-xl hover:scale-125 text-orange-300"
        size={"1.85em"}
      />
    </a>
    <div
      style={{ height: "100vh" }}
      className="ml-3 border-l-2 border-orange-300"
    ></div>
  </div>
  )
}
  
export default ActionBar;
  