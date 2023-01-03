


function ProjectCard (props) {
    return(
        <div>
            <a href={props.link}>
              <div style={{"height": "250px", "width": "250px"}} className='rounded-xl shadow-lg bg-white hover:scale-110 hover:shadow-blue-300 p-4'>
                
                <div className="flex flex-row space-x-1">
                <div className="mt-5">
                <h1 className='text-black font-mono text-md font-bold'>{props.project_name}</h1>
                </div>
                <div style={{"marginLeft": "auto"}} className="m-5 flex flex-row space-x-2">
                <p style={{"fontSize": "12px"}} className={`${props.iconLabel === 'In Progress' ? 'text-yellow-500' : 'text-green-800'}`}>{props.iconLabel}</p>
                {props.icon}
                </div>
                </div>
                <h2 className='mt-5 text-black font-mono text-sm'>{props.project_description}</h2>
              </div>
            </a>
        </div>
    )
}

export default ProjectCard