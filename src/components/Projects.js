import FoxTwo from "./FoxTwo"
import NavBar from "./NavBar"
import ProjectCard from "./ProjectCard"
function Projects() {
    return (
        <div className="relative z-10">
        
        <NavBar />
   
        <div className='projects p-20'>
            <div className='pb-1 pl-5 font-serif text-2xl font-bold'>Projects</div>
            <hr className='pb-5'></hr>
            <div className='place-content-center flex flex-row space-x-10 z-100'>
                <ProjectCard project_name={'Cascade'} link={"https://github.com/digithed/cascade"} project_description={'A programming language for rethinking experimental design'} icon={'wave.png'} />
                <ProjectCard project_name={'BLAST'} link={""} project_description={'A BLAST software as a service (SaaS) tool'} icon={'dna.png'} />
                <ProjectCard project_name={'TBD'} link={""} project_description={'TBD'} icon={'dna.png'} />
            </div>
        </div>
        <div className='absolute bottom-10 top-10 z-0'>
                <FoxTwo />
                <p className='absolute left-20 z-0 text-xs text-slate-400 subtext'>SVG designed by me</p>
                </div>
        </div>
    )
}

export default Projects