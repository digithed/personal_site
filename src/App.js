import './App.css';
import ProjectCard from './components/ProjectCard';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='h-screen bg-gradient-to-r from-teal-300 to-emerald-300'>
      <SideBar />
      <div className='pl-40 container mx-auto'>

          <div className='pt-10'>
          <div className='text-title rounded-xl shadow-xl'>
          <div className='flex flex-row '>
          <div>
            <h1 className='p-5  text-title font-serif pt-10 text-4xl font-bold'>Nicholas (Nick) Rosenau</h1>
            <h2 className='p-5 text-subtitle italic font-serif pt-10 text-2xl font-bold'>Full-Stack Software Engineer</h2>
            {/* <h3 className='p-5 text-extra italic font-serif pt-10 text-2xl font-bold shadow-sm'>Funky AND Fresh</h3> */}
          </div>
          <div className='pb-3 pl-10'>
            <img style={{ 'width': '200px', 'height': '200px' }} className='picture-fade rounded-full shadow-xl' src='me.png'></img>
          </div>
          </div>
        </div>
        </div>
        <div className='projects pt-10'>
          <div className='pb-1 font-serif text-xl font-bold'>Projects</div>
          <hr className='pb-5'></hr>
          <div className='place-content-center flex flex-row space-x-10'>
            <ProjectCard project_name={'Cascade'} link={"https://github.com/digithed/cascade"} project_description={'A programming language for experimental design'} />
            <ProjectCard project_name={'Nitro'} link={""} project_description={'A BLAST Software as a service (SaaS) tool for custom genomic data'} />
            <ProjectCard project_name={'TBD'} link={""} project_description={'TBD'}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
