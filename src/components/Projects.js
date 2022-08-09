import NavBar from "./NavBar"
import ProjectCard from "./ProjectCard"
function Projects() {
  
    // const returnClusters = (position) => {
    //   const clusters = 
    //   <div className={`absolute ${position} z-0`}>
    //   <div className="node-x"></div>
    //   <div className="node-y"></div>
    //   <div className="node-y"></div>
    //   <div className="node-x"></div>
    //   </div>
  
    //   return clusters
    // }
    return (
        <div className="relative z-10">
        
        <NavBar />
   
        <div className='projects p-20'>
            <div className='pb-1 pl-5 font-serif text-2xl font-bold'>Projects</div>
            {/* {returnClusters('top-0 right-0')} */}
            <hr className='pb-5'></hr>
            <div className='place-content-center flex flex-row space-x-10 z-100'>
                <ProjectCard project_name={'Cascade'} link={"https://github.com/digithed/cascade"} project_description={'A programming language for rethinking experimental design'} icon={'wave.png'} />
                <ProjectCard project_name={'BLAST'} link={""} project_description={'A BLAST software as a service (SaaS) tool'} icon={'dna.png'} />
                <ProjectCard project_name={'TBD'} link={""} project_description={'TBD'} icon={'dna.png'} />
            </div>
    
            {/* {returnClusters('bottom-0 right-0')} */}

        </div>
        {/* {returnClusters('left-0 bottom-0')} */}
        </div>
    )
}

export default Projects