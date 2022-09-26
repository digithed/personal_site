import './App.css';
import NavBar from './components/NavBar';
import { FiMail } from "react-icons/fi";
import FoxOne from './components/FoxOne';
import Robot from './components/Robot';

function App() {

  return (
    <div className='background-image-home'>
      <NavBar />
      {/* <div className='absolute z-0 top-20 left-0 z-0'>
        <Hill />
      </div>
      <div className='absolute z-0 top-20 mt-20 left-0 z-0'>
        <Hill />
      </div>
      <div className='absolute z-0 top-20 mt-40 left-0 z-0'>
        <Hill />
      </div>
      <div className='absolute z-0 top-20 mt-60 left-0 z-0'>
        <Hill />
      </div>
      <div className='absolute z-0 top-20 mt-80 left-0 z-0'>
        <Hill />
      </div>
      <div style={{'marginTop': '400px'}} className='absolute z-0 top-20 left-0 z-0'>
        <Hill />
      </div> */}
      <div className='pt-10 container mx-auto'>
        {/* <div className='absolute z-0 left-0 top-20 pr-20'>
          <Hill />
          </div>
          <div className='mt-20'>
          <Forest />
          </div>
          <div className='mt-10 mr-10'>
          <Forest />
          </div>
          <div className='mt-20 mr-10'>
          <Forest />
          </div> */}

        <div className='relative mt-10 place-content-center flex'>

          <div className='mb-20 p-10 relative z-101'>

            <div style={{ 'width': '800px', 'height': '500px' }} className='relative card-background text-title rounded-xl shadow-slate-200 shadow-lg p-5'>
              <div>
                <div className='absolute bottom-0 left-0 mb-10'>
                  <FoxOne />
                </div>
                <div className='absolute bottom-10 right-0 z-0'>
                  <Robot eye1={'eye1'} eye2={'eye2'} sensor={"sensor"} />
                </div>
                <img alt="me" style={{ 'width': '180px', 'height': '150px' }} className='relative ml-auto mr-auto picture-fade rounded-xl shadow-xl' src='me.png'></img>
              </div>
              <div className='text-center'>
                <h1 className='pl-5 text-title font-mono pt-10 text-4xl font-bold'>Nick Rosenau</h1>
                <h3 className='pl-5 text-subtitle font-mono pt-5 text-lg font-bold'>Software engineer, inventor, entrepreneur</h3>

                <h3 className='pl-5 text-subtitle font-mono pt-5 text-sm font-bold'>Programming Languages, Machine Learning, Life Sciences</h3>
                <p className='text-xs mt-3 text-slate-400 subtext'>SVG animations created by Nick Rosenau</p>
              </div>
              <div className='flex flex-row place-content-center pt-3 space-x-4'>
                <a href='https://github.com/digithed'><img className={'w-7 h-7 shadow-xl hover:shadow-slate-300'} alt='github logo' src='github-logo.png' /></a>
                <a href='https://www.linkedin.com/in/nick-rosenau-2b0614b3/'><img className={'w-7 h-7 shadow-xl hover:shadow-slate-300'} alt='linkedin logo' src='linkedin-logo.png' /></a>
                <a href='mailto: nicholas.c.rosenau@gmail.com'>
                  <span class="flex h-5 w-5 float-right">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-slate-300 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>
                  <FiMail className='shadow-xl hover:shadow-slate-300' size={'1.85em'} />

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
