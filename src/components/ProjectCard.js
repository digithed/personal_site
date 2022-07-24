


function ProjectCard (props) {
    return(
        <div>
            <a href={props.link}>
              <div style={{ 'width': '200px', 'height': '200px' }} className='rounded-xl bg-white hover:shadow-xl hover:shadow-slate-500'>
                <h1 className='p-2 text-black font-serif text-lg'>{props.project_name}</h1>
                <h2 className='p-2 text-black font-serif text-md'>{props.project_description}</h2>
              </div>
            </a>
        </div>
    )
}

export default ProjectCard