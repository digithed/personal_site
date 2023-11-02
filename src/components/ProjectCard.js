
import { BsArrowRightShort } from "react-icons/bs";

function ProjectCard(props) {
  return (
    <div>
      {props.link !== "" ? <a href={props.link}>
        <div style={{ "height": "260px", "width": "250px" }} className='rounded-xl shadow-lg bg-slate-600 text-white hover:scale-110 hover:shadow-blue-300 p-4'>

          <div className="flex flex-col space-y-2 md:flex-row md:space-x-1 md:space-y-0 jutify-center md:justify-start">
            <div className="mt-5">
              <h1 className='text-white font-mono text-md font-bold'>{props.project_name}</h1>
            </div>
            <div className="m-5 flex flex-row space-x-2 justify-center md:justify-end">
              <p style={{ "fontSize": "12px" }} className={`${props.iconLabel === 'In Progress' ? 'text-yellow-500' : 'text-green-300'}`}>{props.iconLabel}</p>
              {props.icon}
            </div>
          </div>
          <h2 className='mt-5 text-white font-mono text-sm'>{props.project_description}</h2>
          <div className="flex flex-row mt-5 space-x-2 justify-center md:justify-start"><p className="font-mono text-sm text-blue-300">View</p><BsArrowRightShort style={{'marginTop': '2px'}} /></div>
        </div>
      </a>

        :

        <div style={{ "height": "250px", "width": "250px" }} className='rounded-xl shadow-lg bg-slate-600 text-white hover:scale-110 hover:shadow-blue-300 p-4'>

          <div className="flex flex-col space-y-2 md:flex-row md:space-x-1 md:space-y-0 jutify-center">
            <div className="mt-5">
              <h1 className='text-white font-mono text-md font-bold'>{props.project_name}</h1>
            </div>
            <div className="m-5 flex flex-row space-x-2 justify-center">
              <p style={{ "fontSize": "12px" }} className={`${props.iconLabel === 'In Progress' ? 'text-yellow-500' : 'text-green-800'}`}>{props.iconLabel}</p>
              {props.icon}
            </div>
          </div>
          <h2 className='mt-5 text-white font-mono text-sm'>{props.project_description}</h2>
        </div>
      }

    </div>

  )
}

export default ProjectCard