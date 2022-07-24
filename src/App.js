import './App.css';
import ProjectCard from './components/ProjectCard';
import SideBar from './components/SideBar';
import { FiMail } from "react-icons/fi";

function App() {
  return (
    <div className='h-screen bg-gradient-to-r from-rose-200 to-orange-300'>
      <SideBar />
      <div className='pl-40 container mx-auto'>

        <div className='pt-10 place-content-center flex'>
          <div style={{ 'width': '700px' }} className='text-title rounded-xl shadow-lg shadow-white p-5'>
            <div className='flex flex-row float-right space-x-4'>
              <a href='https://github.com/digithed'><img className={'w-7 h-7 shadow-xl hover:shadow-white'} alt='github logo' src='github-logo.png' /></a>
              <a href='https://www.linkedin.com/in/nick-rosenau-2b0614b3/'><img className={'w-7 h-7 shadow-xl hover:shadow-white'} alt='linkedin logo' src='linkedin-logo.png' /></a>
              <a href='mailto: nicholas.c.rosenau@gmail.com'>
              <span class="flex h-5 w-5 float-right">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-rose-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <FiMail  className='shadow-xl hover:shadow-white' size={'1.85em'}/>
               
                </a>
            </div>
            <div className='flex flex-row '>
              <div>
                <h1 className='pl-5 text-title font-serif pt-10 text-4xl font-bold'>Nick Rosenau</h1>
                <h3 className='pl-5 text-subtitle font-mono pt-10 text-lg font-bold'>Full-stack software engineer</h3>
                <h3 className='pl-5 pb-5 text-subtitle font-serif text-xl font-bold'>Life sciences aficionado</h3>
                {/* <h3 className='p-5 text-extra italic font-serif pt-10 text-2xl font-bold shadow-sm'>Funky AND Fresh</h3> */}
              </div>
              <div className='pl-10 mt-5'>
                <img alt="me" style={{ 'width': '200px', 'height': '200px' }} className='picture-fade rounded-full shadow-xl' src='me.png'></img>
              </div>
            </div>
          </div>
        </div>
        <div className='projects mt-10 pb-10'>
          <div className='pb-1 pl-5 font-serif text-2xl font-bold'>Projects</div>
          <hr className='pb-5'></hr>
          <div className='place-content-center flex flex-row space-x-10'>
            <ProjectCard project_name={'Cascade'} link={"https://github.com/digithed/cascade"} project_description={'A programming language for rethinking experimental design'} icon={'wave.png'} />
            <ProjectCard project_name={'BLAST'} link={""} project_description={'A BLAST software as a service (SaaS) tool'} icon={'dna.png'} />
            <ProjectCard project_name={'TBD'} link={""} project_description={'TBD'} icon={'dna.png'} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
