import './App.css';
import NavBar from './components/NavBar';
import { FiActivity, FiCheckSquare, FiDownload, FiMail } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FadeInSection } from './components/FadeInSection';
import ProjectCard from './components/ProjectCard';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID ? process.env.REACT_APP_SERVICE_ID :  ""
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID ? process.env.REACT_APP_TEMPLATE_ID : ""
  const USER_ID = process.env.REACT_APP_USER_ID ? process.env.REACT_APP_USER_ID : ""

  function submitForm(e: any){
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text);
      });


  }
  return (
    <div style={{ width: "100%" }} className='bg-slate-800'>
      <div className='flex flex-col pt-5 space-y-4 fixed z-10 text-blue-300 ml-2'>
        <div style={{ height: "40vh" }} className='ml-3 border-l-2'>
          <h2></h2>
        </div>
        <a href='https://github.com/digithed'><AiFillGithub className='hover:scale-125' style={{ width: "30px", height: "30px" }} /></a>
        <a href='https://www.linkedin.com/in/nick-rosenau-2b0614b3/'><AiFillLinkedin className='hover:scale-125' style={{ width: "30px", height: "30px" }} /></a>
        <a href='mailto: nicholas.c.rosenau@gmail.com'>
          <span className="flex h-5 w-5 float-right">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
          </span>
          <FiMail className='shadow-xl hover:scale-125' size={'1.85em'} />

        </a>

        <div style={{ height: "100vh" }} className='ml-3 border-l-2 border-blue-300'>
          <h2></h2>
        </div>
      </div>

      <div className='ml-7'>
        <h2 className="text-9xl text-blue-300 pt-20 pl-10 text-title">Nick Rosenau</h2>
        <h2 className="text-7xl text-blue-100 mt-5 mb-40 pl-10 text-subtitle">Software Engineer</h2>
        <div className='picture-fade'>
          <FadeInSection>
            <div style={{ width: "100%", height: "70vh" }} className='box font-light hover:scale-100 text-white'>
              <div className='flex flex-row space-x-20'>
                <h2 className='heading text-5xl mb-10 font-medium text-blue-300'>My Overview</h2>
              </div>
              <h2 className='text-2xl mb-2'>Current base: New York City</h2>
              <h2 className='text-2xl mb-2'>Current company: Lattice Automation</h2>
              <h2 className='text-2xl mb-2'>Specialty: Full-stack</h2>
              <h2 className='text-2xl mb-2'>Education:</h2>
              <ol>
                <li>
                  B.S. in Neuroscience - Emmanuel College
                </li>
                <li>
                  Graduate Certificate in Computer Science - Northeastern University
                </li>
              </ol>
              <img style={{ width: "250px", height: "200px" }} className='rounded-xl shadow-xl float-right absolute top-20 right-80 sepia hover:sepia-0 mt-10' src='me.png' />
              <a href='nicholas_rosenau_resume.pdf' download>
                  <div style={{width: "15%"}} className='rounded-xl p-3 bg-slate-200 hover:scale-110 text-black text-sm flex flex-row space-x-2 mt-5'>
                    <p className="mt-1">Download Resume</p>
                    <FiDownload className="mt-1" size={'1.25em'} />
                  </div>
                </a>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div style={{ width: "100%", height: "70vh" }} className='box'>
              <h2 className='text-5xl mb-10 font-medium text-blue-300'>Projects</h2>
              <div style={{ width: "300px", height: "200px" }} className="flex flex-row space-x-4 mt-5">
                <ProjectCard project_name={'Rust-Wasm Clustering'} link={"https://mlwasm.vercel.app/"} project_description={'Created a K-Means clustering algorithm to use multithreading in Rust-Wasm'} icon={<FiCheckSquare size={20} />} iconLabel={"Complete"} />
                <ProjectCard project_name={'Mona'} link={""} project_description={'Working on a programming language that creates experimental designs'} icon={<FiActivity size={20} />} iconLabel={"In Progress"} />
                <ProjectCard project_name={'Crispier and Cas-ier'} link={""} project_description={'Creating a CRISPR web application based on a newly designed Cas protein'} icon={<FiActivity size={20} />} iconLabel={"In Progress"} />
                <ProjectCard project_name={'Component Library'} link={""} project_description={'Creating a component library for React'} icon={<FiActivity size={20} />} iconLabel={"In Progress"} />
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div style={{ width: "100%", height: "90vh" }} className='box'>
              <h2 className='text-5xl mb-5 text-blue-300'>Let's Collaborate! :)</h2>
              <form onSubmit={submitForm}>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Name</label>
                <input onChange={(e) => setName(e.target.value)} placeholder="Enter name" style={{ width: "25%" }} className="rounded-xl p-3 mb-2" type="text" name="from_name" />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Email</label>
                <input onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email" style={{ width: "25%" }} className="rounded-xl p-3 mb-2" type="email" name="from_email" />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a topic</label>
                <select name="topic" style={{ width: "25%" }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5">
                  <option value="Frontend freelancing">Frontend freelancing</option>
                  <option value="Backend freelancing">Backend freelancing</option>
                  <option value="Full-stack freelancing">Full-stack freelancing</option>
                  <option value="Other">Other</option>
                </select>
                <textarea name="message" placeholder="Enter a note" style={{ width: "50%", height: "100px" }} className="p-3 rounded-xl mb-5" />
                <br></br>
                {name === "" || email === "" ? <button style={{ width: "100px", cursor: "pointer"}} className="p-3 bg-slate-400 rounded-xl text-slate-200 opacity-50" type="button" disabled>Submit</button>
                : <button style={{ width: "100px", cursor: "pointer"}} className="p-3 bg-blue-400 hover:bg-blue-500 rounded-xl text-white" type="submit">Submit</button>}
              </form>

            </div>
          </FadeInSection>
        </div>
      </div>
    </div>

  );
}

export default App;
