import './App.css';
import { FiActivity, FiCheckSquare, FiDownload, FiMail } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaPython, FaHtml5, FaCuttlefish, FaRust, FaJava, FaReact, FaCog, FaCrown, FaCrosshairs, FaAws } from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'
import { BsCodeSlash } from "react-icons/bs";
import { FadeInSection } from './components/FadeInSection';
import ProjectCard from './components/ProjectCard';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { Animation } from './components/Animation';
import { MissionStatement } from './components/MissionStatement';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pythonDetails, setPythonDetails] = useState(false)
  const [htmlDetails, setHtmlDetails] = useState(false)
  const [cDetails, setCDetails] = useState(false)
  const [jsDetails, setJsDetails] = useState(false)
  const [rustDetails, setRustDetails] = useState(false)
  const [javaDetails, setJavaDetails] = useState(false)
  const [reactDetails, setReactDetails] = useState(false)
  const [flaskDetails, setFlaskDetails] = useState(false)
  const [AWSDetails, setAWSDetails] = useState(false)
  const [loading, setLoading] = useState(true);
  const [showMission, setShowMission] = useState(false)

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
      {loading ? <div className='bg-slate-800 pt-20 w-full h-screen'><img alt='logo' src='logo.jpeg' className="animate-pulse mx-auto pt-60" /></div>
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

          <div className='text-center md:text-left ml-10 md:ml-20'>
            <div className='fixed top-20 text-blue-400 opacity-25'>
              <BsCodeSlash style={{ width: "300px", height: "300px" }} />
            </div>
            <h2 className="md:text-9xl text-7xl text-blue-300 pt-20 md:pl-10 text-title">Nick Rosenau</h2>
            <h2 className="md:text-7xl text-5xl text-blue-100 mt-5 mb-20 md:pl-10 text-subtitle">Software Engineer</h2>
            <div className='flex flex-col'>
              <h1 className='ml-10 heading text-5xl mb-3 font-medium text-blue-300 text-subtitle'>Mission Statement</h1>
              <div className='ml-10 w-1/2'>
              <h2 className='heading text-xl mb-3 font-medium text-white text-subtitle'>Welcome. If you've ever wanted to program or be a Software Engineer but doubted your abilities, keep reading...</h2>
              <br></br>
              {!showMission ? <button style={{ width: "100px", cursor: "pointer" }} className="p-3 bg-blue-400 hover:bg-blue-500 rounded-xl text-white mb-10 text-subtitle" onClick={() => setShowMission(true)}>See More</button>
              :
              <>
              <MissionStatement/>
              <button style={{ width: "100px", cursor: "pointer" }} className="p-3 bg-blue-400 hover:bg-blue-500 rounded-xl text-white" onClick={() => setShowMission(false)}>Show Less</button>
              </>
          }
              </div>
            </div>
            <div className='picture-fade'>
              <FadeInSection>
                <div className='h-[110vh] md:h-[75vh] box font-light text-white'>
                  <div className='flex flex-row space-x-2'>
                    <h2 className='heading text-5xl mb-3 font-medium text-blue-300'>My Overview</h2>
                  </div>
                  <div className='h-1 md:w-1/2 border-t border-blue-100 mb-10' />
                  <div className="flex flex-col md:flex-row items-center">
                  <img className='md:mr-5 w-[11.5rem] h-[9.5rem] md:w-[14.5rem] md:h-[11.5rem] rounded-xl border-2 border-blue-300 shadow-blue-300 mb-5' src='me.png' alt="me" />
                  <ul className='md:pr-5 rounded-xl text-center md:text-left'>
                  <li className='text-2xl mb-2 text-blue-100'>Current base: <span className="text-orange-300">New York City</span></li>
                  <li className='text-2xl mb-2 text-blue-100'>Current company: <span className="text-orange-300">Lattice Automation</span></li>
                  <li className='text-2xl mb-2 text-blue-100'>Specialty: <span className="text-orange-300">Full-stack</span></li>
                  <li className='text-2xl mb-2 text-blue-100'>Education:
                  <ol>
                    <li className='text-blue-100 text-sm'>
                      B.S. in Neuroscience <span className="text-orange-300">- Emmanuel College</span>
                    </li>
                    <li className='text-slate-300 text-sm'>
                      Graduate Certificate in Computer Science <span className="text-orange-300">- Northeastern University</span>
                    </li>
                  </ol>
                  <a href='nicholas_rosenau_resume.pdf' download>
                    <div className='md:w-1/2 rounded-xl p-3 bg-slate-600 border border-blue-300 hover:scale-110 hover:shadow-md hover:shadow-orange-300 text-black text-sm flex flex-row space-x-2 mt-5 justify-center'>
                      <p className="mt-1 text-white font-mono">Download Resume</p>
                      <FiDownload className="mt-1 text-orange-300" size={'1.25em'} />
                    </div>
                  </a>
                  </li>
                  </ul>
                  </div>
                  <h2 className='text-2xl mb-3 mt-3 font-medium text-blue-300'>Key Takeaways</h2>
                  <Animation icon={<FaCog/>} text={"3 Years working as a full-stack engineer"} />
                  <Animation icon={<FaCrosshairs/>} text={"Fluent in 3 programming languages"} />
                  <Animation icon={<FaCrown/>} text={"2nd place in biotech hackathon; held in Boston"} />
                </div>
              </FadeInSection>

              
              <FadeInSection>
                <div className='h-[130vh] md:h-[75vh] box'>
                  <h2 className='text-5xl md:mt-0 mb-3 font-medium text-blue-300'>Projects</h2>
                  <div className='h-1 md:w-1/2 border-t border-blue-100 mb-10' />
                  <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mt-5">
                    <ProjectCard project_name={'Traverse Company Website'} link={"https://www.travelwithtraverse.com"} project_description={'Created a professional website for an Airbnb management company using Next.js'} icon={<FiCheckSquare size={20} />} iconLabel={"Complete"} />
                    <ProjectCard project_name={'Rust-Wasm Clustering'} link={"https://mlwasm.vercel.app/"} project_description={'Created a K-Means clustering algorithm to use multithreading in Rust-Wasm'} icon={<FiCheckSquare size={20} />} iconLabel={"Complete"} />
                    <ProjectCard project_name={'Nitro UI'} link={"https://storybook.nitro.bio/?path=/story/ariadne-ariadne--kitchen-sink-viewer-story"} project_description={'Contributing to a UI library targeting the life sciences'} icon={<FiActivity size={20} />} iconLabel={"In Progress"} />
                    {/* <ProjectCard project_name={'Mona'} link={""} project_description={'Working on a programming language that creates experimental designs'} icon={<FiActivity size={20} />} iconLabel={"In Progress"} /> */}
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection>
                <div className='h-[160vh] md:h-[65vh] box font-light text-white'>
                  <h2 className='text-5xl mb-3 text-blue-300 font-medium'>Programming Languages</h2>
                  <div className='h-1 md:w-1/2 border-t border-blue-100 mb-10' />
                  <div className='flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0 ml-5'>
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
                    <div onMouseOver={() => setHtmlDetails(true)} onMouseOut={() => setHtmlDetails(false)}>
                      <FaHtml5 className='hover:scale-125 hover:text-blue-300' style={{ width: "200px", height: "200px" }} />
                      {htmlDetails && <div className='quickfadein'>
                        <h2 className='text-2xl ml-10 mt-10'>HTML5</h2>
                        <h3 className='text-xl ml-10 text-green-300'>Fluent</h3>
                      </div>}
                    </div>
                    <div onMouseOver={() => setCDetails(true)} onMouseOut={() => setCDetails(false)}>
                      <FaCuttlefish className='hover:scale-125 hover:text-blue-300' style={{ width: "200px", height: "200px" }} />
                      {cDetails && <div className='quickfadein'>
                        <h2 className='text-2xl ml-10 mt-10'>C</h2>
                        <h3 className='text-xl ml-10 text-purple-300'>Intermediate</h3>
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
                <div className='h-[110vh] md:h-[65vh] box font-light text-white'>
                  <h2 className='text-5xl mb-3 text-blue-300 font-medium'>Frameworks</h2>
                  <div className='h-1 md:w-1/2 border-t border-blue-100 mb-10' />
                  <div className='flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0 ml-5'>
                    <div onMouseOver={() => setReactDetails(true)} onMouseOut={() => setReactDetails(false)}>
                      <FaReact className='hover:scale-125 hover:text-orange-300' style={{ width: "200px", height: "200px" }} />
                      {reactDetails && <div className='quickfadein'>
                        <h2 className='text-2xl md:ml-10 mt-10'>React, Next.js</h2>
                        <h3 className='text-xl md:ml-10 text-green-300'>Fluent</h3>
                      </div>}
                    </div>
                    <div onMouseOver={() => setFlaskDetails(true)} onMouseOut={() => setFlaskDetails(false)}>
                      <SiFlask className='hover:scale-125 hover:text-orange-300' style={{ width: "200px", height: "200px" }} />
                      {flaskDetails && <div className='quickfadein'>
                        <h2 className='text-2xl md:ml-10 mt-10'>Flask</h2>
                        <h3 className='text-xl md:ml-10 text-green-300'>Fluent</h3>
                      </div>}
                    </div>
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection>
                <div className='h-[110vh] md:h-[65vh] box font-light text-white'>
                  <h2 className='text-5xl mb-3 text-blue-300 font-medium'>Cloud Technologies</h2>
                  <div className='h-1 md:w-1/2 border-t border-blue-100 mb-10' />
                  <div className='flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0 ml-5'>
                    <div onMouseOver={() => setAWSDetails(true)} onMouseOut={() => setAWSDetails(false)}>
                      <FaAws className='hover:scale-125 hover:text-purple-300' style={{ width: "200px", height: "200px" }} />
                      {AWSDetails && <div className='quickfadein'>
                        <h2 className='text-2xl md:ml-10 mt-10'>AWS</h2>
                        <h3 className='text-xl md:ml-10 text-green-300'>Fluent</h3>
                      </div>}
                    </div>
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection>
                <div className='h-[110vh] md:h-[90vh] box'>
                  <h2 className='text-5xl mb-3 text-blue-300'>Let's Collaborate!</h2>
                  <div className='h-1 md:w-1/2 border-t border-blue-100 mb-10' />
                  <form onSubmit={submitForm}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-200">Name</label>
                    <input onChange={(e) => setName(e.target.value)} placeholder="Enter name" className="rounded-xl p-3 mb-2 bg-slate-700 text-orange-300 md:w-1/3" type="text" name="from_name" />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-200">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" className="rounded-xl p-3 mb-2 bg-slate-700 text-orange-300 md:w-1/3" type="email" name="from_email" />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-200">Select a topic</label>
                    <select name="topic" className="appearance-none border border-gray-300 text-sm text-orange-300 rounded-lg bg-slate-700 focus:ring-blue-500 block focus:border-blue-500 md:w-1/3 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5 ml-6 md:ml-0">
                      <option value="Frontend freelancing">Frontend freelancing</option>
                      <option value="Backend freelancing">Backend freelancing</option>
                      <option value="Full-stack freelancing">Full-stack freelancing</option>
                      <option value="Other">Other</option>
                    </select>
                    <textarea name="message" placeholder="Enter a note" className="p-3 h-[10rem] rounded-xl mb-5 bg-slate-700 text-orange-300 md:w-1/3" />
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
