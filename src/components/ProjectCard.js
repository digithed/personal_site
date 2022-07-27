


function ProjectCard (props) {
    return(
        <div>
            <a href={props.link}>
              <div style={{ 'width': '220px', 'height': '220px' }} className='rounded-xl bg-beige-400 shadow-xl hover:shadow-lg hover:shadow-sky-300'>
                <div className="flex flex-row">
                <h1 className='p-5 text-black font-serif text-lg'>{props.project_name}</h1>
                <img className='h-7 w-7 rounded-full mt-4' alt='dna' src={props.icon}/>
                </div>
                <h2 className='p-5 text-black font-serif text-md'>{props.project_description}</h2>
              </div>
            </a>
        </div>
    )
}

export default ProjectCard