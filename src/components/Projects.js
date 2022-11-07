import Robot from "./Robot"
import FoxTwo from "./FoxTwo"
import NavBar from "./NavBar"
import ProjectCard from "./ProjectCard"
function Projects() {
    return (
        <div className="font-mono z-10 bg-teal-400 h-screen">

            <NavBar />

            <div className='projects p-20'>
                <div className="flex flex-row space-x-10">
                <div className='pb-1 text-4xl font-bold'>Projects</div>
                <img width='50px' height='50px' src='worker.png' alt='worker'/>
                </div>
                <hr className='pb-5'></hr>
                <div className="mb-5 font-mono text-lg">
                    <h2>"If you ever feel overwhelmed, take on another project."</h2>
                    <i>- Roy Halston Frowick</i>
                    </div>
                <div className='place-content-center flex flex-row space-x-10 z-100'>
                    <ProjectCard project_name={'Mona'} link={""} project_description={'Working on a programming language that creates experimental designs'} icon={'wave.png'} />
                    <ProjectCard project_name={'Crispier and Cas-ier'} link={""} project_description={'Creating a CRISPR web application based on a newly designed Cas protein'} icon={'dna.png'} />
                    <ProjectCard project_name={'Component Library'} link={""} project_description={'Creating a component library for React'} icon={'dna.png'} />
                </div>
            </div>
            <div className='absolute top-20 z-0'>
                <FoxTwo />
            </div>
            <div className='absolute mt-20 top-40 right-0 z-0'>
                <Robot eye1={'eye1angry'} eye2={'eye2angry'} sensor={"angrysensor"} />
            </div>
        </div>
    )
}

export default Projects