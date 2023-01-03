import './App.css';
import { FiActivity, FiCheckSquare, FiDownload, FiMail } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaPython, FaRust, FaJava, FaReact, FaRegSmileBeam } from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'
import { BsCodeSlash } from "react-icons/bs";
import { FadeInSection } from './components/FadeInSection';
import ProjectCard from './components/ProjectCard';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pythonDetails, setPythonDetails] = useState(false)
  const [jsDetails, setJsDetails] = useState(false)
  const [rustDetails, setRustDetails] = useState(false)
  const [javaDetails, setJavaDetails] = useState(false)
  const [reactDetails, setReactDetails] = useState(false)
  const [flaskDetails, setFlaskDetails] = useState(false)
  const [loading, setLoading] = useState(true);

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID ? process.env.REACT_APP_SERVICE_ID : ""
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID ? process.env.REACT_APP_TEMPLATE_ID : ""
  const USER_ID = process.env.REACT_APP_USER_ID ? process.env.REACT_APP_USER_ID : ""

  function submitForm(e: any) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text);
      });
  }
  const sleep = (ms: any) => new Promise(
    resolve => setTimeout(resolve, ms)
  );


  useEffect(() => {
    async function animatestuff() {
      await sleep(2000)
      setLoading(false)
    }
    animatestuff()
  }, [])


  return (
    <>
      {loading ? <div className='bg-slate-800 pt-20 w-full h-screen'><FaRegSmileBeam style={{ width: "300px", height: "300px" }} className="text-orange-300 animate-pulse mx-auto pt-60" /></div>
        :
        <div className='bg-slate-800 w-full'>
          <div className='flex flex-col pt-5 space-y-4 fixed z-10 ml-2'>
            <div style={{ height: "40vh" }} className='ml-3 border-l-2 border-blue-300'>
            </div>
            <a href='https://github.com/digithed'><AiFillGithub className='hover:scale-125 text-blue-300' style={{ width: "30px", height: "30px" }} /></a>
            <a href='https://www.linkedin.com/in/nick-rosenau-2b0614b3/'><AiFillLinkedin className='hover:scale-125 text-blue-100' style={{ width: "30px", height: "30px" }} /></a>
            <a href='mailto: nicholas.c.rosenau@gmail.com'>
              <span className="flex h-5 w-5 float-right">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-orange-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-400"></span>
              </span>
              <FiMail className='shadow-xl hover:scale-125 text-orange-300' size={'1.85em'} />

            </a>

            <div style={{ height: "100vh" }} className='ml-3 border-l-2 border-orange-300'>
            </div>
          </div>

          <div className='ml-10'>
            <div className='fixed top-20 text-blue-400 opacity-25'>
              <BsCodeSlash style={{ width: "300px", height: "300px" }} />
            </div>
            <h2 className="text-9xl text-blue-300 pt-20 pl-10 text-title">Nick Rosenau</h2>
            <h2 className="text-7xl text-blue-100 mt-5 mb-20 pl-10 text-subtitle">Software Engineer</h2>
            <div className="pl-10 text-subtitle" style={{ width: "55%" }}>
              <h2 className='text-blue-300 mb-2 pl-2'>"Life can only be understood backwards, but it must be lived forwards."</h2>
              <i className='text-blue-100 pl-2'>- Søren Kierkegaard</i>
            </div>
            <div className='picture-fade'>
              <FadeInSection>
                <div style={{ width: "100%", height: "70vh" }} className='box font-light text-white'>
                  <div className='flex flex-row space-x-2'>
                    <h2 className='heading text-5xl mb-3 font-medium text-blue-300'>My Overview</h2>
                  </div>
                  <div style={{ width: "50%", height: "1px" }} className='border-t border-blue-100 mb-10' />
                  <h2 className='text-2xl mb-2 text-blue-300'>Current base: <span className="text-orange-300">New York City</span></h2>
                  <h2 className='text-2xl mb-2 text-blue-300'>Current company: <span className="text-orange-300">Lattice Automation</span></h2>
                  <h2 className='text-2xl mb-2 text-blue-300'>Specialty: <span className="text-orange-300">Full-stack</span></h2>
                  <h2 className='text-2xl mb-2 text-blue-300'>Education:</h2>
                  <ol>
                    <li className='text-blue-300'>
                      B.S. in Neuroscience <span className="text-orange-300">- Emmanuel College</span>
                    </li>
                    <li className='text-blue-300'>
                      Graduate Certificate in Computer Science <span className="text-orange-300">- Northeastern University</span>
                    </li>
                  </ol>
                  <img style={{ width: "250px", height: "200px" }} className='rounded-xl shadow-xl float-right absolute top-20 right-80 mt-20 border-4 border-blue-300' src='me.png' alt="me" />
                  <a href='nicholas_rosenau_resume.pdf' download>
                    <div style={{ width: "15%" }} className='rounded-xl p-3 bg-slate-200 hover:scale-110 hover:shadow-md hover:shadow-orange-300 text-black text-sm flex flex-row space-x-2 mt-5'>
                      <p className="mt-1">Download Resume</p>
                      <FiDownload className="mt-1" size={'1.25em'} />
                    </div>
                  </a>
                </div>
              </FadeInSection>
              <FadeInSection>
                <div style={{ width: "70%", height: "80vh" }} className='box'>
                  <h2 className='text-5xl mb-3 font-medium text-blue-300'>Projects</h2>
                  <div style={{ width: "100%", height: "1px" }} className='border-t border-blue-100 mb-10' />
                  <div style={{ width: "300px", height: "200px" }} className="flex flex-row space-x-4 mt-5">
                    <ProjectCard project_name={'Rust-Wasm Clustering'} link={"https://mlwasm.vercel.app/"} project_description={'Created a K-Means clustering algorithm to use multithreading in Rust-Wasm'} icon={<FiCheckSquare size={20} />} iconLabel={"Complete"} />
                    <ProjectCard project_name={'Nitro UI'} link={"https://storybook.nitro.bio/?path=/story/ariadne-ariadne--kitchen-sink-viewer-story"} project_description={'Contributing to a UI library targeting the life sciences'} icon={<FiActivity size={20} />} iconLabel={"In Progress"} />
                    <ProjectCard project_name={'Mona'} link={""} project_description={'Working on a programming language that creates experimental designs'} icon={<FiActivity size={20} />} iconLabel={"In Progress"} />
                    {/* <ProjectCard project_name={'Crispier and Cas-ier'} link={""} project_description={'Creating a CRISPR web application based on a newly designed Cas protein'} icon={<FiActivity size={20} />} iconLabel={"In Progress"} /> */}
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection>
                <div style={{ width: "100%", height: "70vh" }} className='box font-light text-white'>
                  <h2 className='text-5xl mb-3 text-blue-300 font-medium'>Programming Languages</h2>
                  <div style={{ width: "50%", height: "1px" }} className='border-t border-blue-100 mb-10' />
                  <div className='flex flex-row space-x-10 mb-40'>
                    <div onMouseOver={() => setPythonDetails(true)} onMouseOut={() => setPythonDetails(false)}>
                      <FaPython className='hover:scale-125 hover:text-blue-300' style={{ width: "200px", height: "200px" }} />
                      {pythonDetails && <div className='quickfadein'>
                        <h2 className='text-2xl ml-10 mt-10'>Python</h2>
                        <h3 className='text-xl ml-10 text-green-300'>Fluent</h3>
                      </div>}
                    </div>
                    <div onMouseOver={() => setJsDetails(true)} onMouseOut={() => setJsDetails(false)}>
                      <DiJavascript1 className='hover:scale-125 hover:text-blue-300' style={{ width: "200px", height: "200px" }} />
                      {jsDetails && <div className='quickfadein'>
                        <h2 className='text-2xl ml-10 mt-10'>Javascript (ES6)</h2>
                        <h3 className='text-xl ml-10 text-green-300'>Fluent</h3>
                      </div>}
                    </div>
                    <div onMouseOver={() => setRustDetails(true)} onMouseOut={() => setRustDetails(false)}>
                      <FaRust className='hover:scale-125 hover:text-blue-300' style={{ width: "200px", height: "200px" }} />
                      {rustDetails && <div className='quickfadein'>
                        <h2 className='text-2xl ml-10 mt-10'>Rust</h2>
                        <h3 className='text-xl ml-10 text-yellow-300'>Beginner</h3>
                      </div>}
                    </div>
                    <div onMouseOver={() => setJavaDetails(true)} onMouseOut={() => setJavaDetails(false)}>
                      <FaJava className='hover:scale-125 hover:text-blue-300' style={{ width: "200px", height: "200px" }} />
                      {javaDetails && <div className='quickfadein'>
                        <h2 className='text-2xl ml-10 mt-10'>Java</h2>
                        <h3 className='text-xl ml-10 text-yellow-300'>Beginner</h3>
                      </div>}
                    </div>
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection>
                <div style={{ width: "100%", height: "70vh" }} className='box font-light text-white'>
                  <h2 className='text-5xl mb-3 text-blue-300 font-medium'>Frameworks</h2>
                  <div style={{ width: "50%", height: "1px" }} className='border-t border-blue-100 mb-10' />
                  <div className='flex flex-row space-x-10'>
                    <div onMouseOver={() => setReactDetails(true)} onMouseOut={() => setReactDetails(false)}>
                      <FaReact className='hover:scale-125 hover:text-orange-300' style={{ width: "200px", height: "200px" }} />
                      {reactDetails && <div className='quickfadein'>
                        <h2 className='text-2xl ml-10 mt-10'>React</h2>
                        <h3 className='text-xl ml-10 text-green-300'>Fluent</h3>
                      </div>}
                    </div>
                    <div onMouseOver={() => setFlaskDetails(true)} onMouseOut={() => setFlaskDetails(false)}>
                      <SiFlask className='hover:scale-125 hover:text-orange-300' style={{ width: "200px", height: "200px" }} />
                      {flaskDetails && <div className='quickfadein'>
                        <h2 className='text-2xl ml-10 mt-10'>Flask</h2>
                        <h3 className='text-xl ml-10 text-green-300'>Fluent</h3>
                      </div>}
                    </div>
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection>
                <div style={{ width: "100%", height: "90vh" }} className='box'>
                  <h2 className='text-5xl mb-3 text-blue-300'>Let's Collaborate! :)</h2>
                  <div style={{ width: "40vw", height: "1px" }} className='border-t border-blue-100 mb-10' />
                  <form onSubmit={submitForm}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-200">Name</label>
                    <input onChange={(e) => setName(e.target.value)} placeholder="Enter name" style={{ width: "25%" }} className="rounded-xl p-3 mb-2 bg-slate-700 text-orange-300" type="text" name="from_name" />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-200">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" style={{ width: "25%" }} className="rounded-xl p-3 mb-2 bg-slate-700 text-orange-300" type="email" name="from_email" />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-200">Select a topic</label>
                    <select name="topic" style={{ width: "25%" }} className=" border border-gray-300 text-sm text-orange-300 rounded-lg bg-slate-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5">
                      <option value="Frontend freelancing">Frontend freelancing</option>
                      <option value="Backend freelancing">Backend freelancing</option>
                      <option value="Full-stack freelancing">Full-stack freelancing</option>
                      <option value="Other">Other</option>
                    </select>
                    <textarea name="message" placeholder="Enter a note" style={{ width: "50%", height: "100px" }} className="p-3 rounded-xl mb-5 bg-slate-700 text-orange-300" />
                    <br></br>
                    {name === "" || email === "" ? <button style={{ width: "100px", cursor: "pointer" }} className="p-3 bg-slate-400 rounded-xl text-slate-200 opacity-50" type="button" disabled>Submit</button>
                      : <button style={{ width: "100px", cursor: "pointer" }} className="p-3 bg-blue-400 hover:bg-blue-500 rounded-xl text-white" type="submit">Submit</button>}
                  </form>

                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      }
    </>

  );
}

export default App;
