


function ProjectCard (props) {
    return(
        <div>
            <a href={props.link}>
              <div style={{ 'width': '220px', 'height': '220px' }} className='rounded-xl  shadow-xl shadow-lg shadow-blue-200 hover:shadow-blue-400'>
                <div className="flex flex-row">
                <h1 className='p-5 text-black font-mono text-lg'>{props.project_name}</h1>
                <img className='h-7 w-7 rounded-full mt-4' alt='dna' src={props.icon}/>
                </div>
                <h2 className='p-5 text-black font-mono text-md'>{props.project_description}</h2>
              </div>
            </a>
        </div>
    )
}

export default ProjectCard