import './App.css';
import NavBar from './components/NavBar';
import { FiMail } from "react-icons/fi";
import {Toggle} from "@ninjha01/nitro-ui"

function App() {
  return (
    <div className='background-image-home'>
      <NavBar />
    
      <div className='pt-10 container mx-auto'>
    
        <div className='relative mt-10 place-content-center flex'>

          <div className='mb-20 p-10 relative z-101'>
          {<Toggle checked={false} />}
            <div style={{ 'width': '600px', 'height': '450px' }} className='relative card-background-inner text-title rounded-xl shadow-lg p-5'>
              <div>
                <img alt="me" style={{ 'width': '180px', 'height': '150px' }} className='relative ml-auto mr-auto picture-fade rounded-xl shadow-xl' src='me.png'></img>
              </div>
              <div className='text-center'>
                <h1 className='pl-5 text-title font-mono pt-10 text-4xl font-bold'>Nick Rosenau</h1>
                <h3 className='pl-5 text-subtitle font-mono pt-5 text-lg font-bold'>Software engineer, inventor, entrepreneur</h3>

                <h3 className='pl-5 text-subtitle font-mono pt-5 text-sm font-bold'>Programming Languages, Machine Learning, Life Sciences</h3>
              <br></br>
              </div>
              <div className='flex flex-row place-content-center pt-3 space-x-4'>
                <a href='https://github.com/digithed'><img className={'w-7 h-7 shadow-xl hover:shadow-teal-300'} alt='github logo' src='github-logo.png' /></a>
                <a href='https://www.linkedin.com/in/nick-rosenau-2b0614b3/'><img className={'w-7 h-7 shadow-xl hover:shadow-teal-300'} alt='linkedin logo' src='linkedin-logo.png' /></a>
                <a href='mailto: nicholas.c.rosenau@gmail.com'>
                  <span class="flex h-5 w-5 float-right">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-teal-300 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>
                  <FiMail className='shadow-xl hover:shadow-teal-300' size={'1.85em'} />

                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
