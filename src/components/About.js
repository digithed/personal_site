import NavBar from "./NavBar";

import { Blockquote  } from '@mantine/core';
function About() {
    return (
        <div>
            <NavBar />

        <div className="pb-40">
            <div className='text-title container mx-auto'>
                <h1 className="pt-10 font-serif text-black text-4xl">About Me</h1>
                <hr className="pb-10"></hr>
                <Blockquote cite="– Richard Feynman">
                Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough.
          </Blockquote>
                <p className="text-black pt-10">
                    Similar to Mr. Feynman, I admire the spirit of curiosity and exploration. In my own case, I transitioned between two completely different careers driven by my curiosity. I started out in molecular biology as a laboratory technician at the Whitehead Institute for Biomedical Research,
                    a subsidiary of MIT. I worked within the lab of Rudolf Jaenisch where I was a core part of a CRISPR/Cas9 facility that offered services to the instititue.
                    Gradually, I developed an interest in coding which started as an after-work hobby and began
                    building small tools to help with my day-to-day job such as Python scripts for automating laborious scheduling tasks.
                </p>
                <div style={{'float': 'right'}} className="pl-5">
                <img style={{'width': '300px', 'height': '300px'}} className='rounded-full shadow-xl shadow-white' alt='charlie and I' src='me_2.jpg' />
                </div>
                <p style={{'textAlign': 'justify'}} className="text-black">
                    <br></br>
                    Over time I began building my own web applications in Javascript frameworks such as React and getting more familiar with full-stack development
                    using Python as a backend language. Deciding to go deeper and follow my newfound passion, I completed Computer Science courses at Northeastern University in order to get some 
                    grounding in a traditional knowledge base. It was at Northeastern that I was introduced to the subfields of Machine Learning, Computer Systems, and Programming Languages,
                    topics that I am currently still interested in exploring.
                </p>
                <p className="text-black">
                    <br></br>
                    A core interest of mine is to create computational tools and resources for the broad field of life sciences. My ambition is that these tools will not be dime a dozen creations,
                    but will be unique, imaginative, and help fuel the next wave of life science research insight.
                    My hope is that over time, by combining Computer Science concepts with my background in the life sciences,
                    I'll be able to grow positively as a software engineer, scientist, and entrepenuer.
                </p>
            </div>
        </div>
        </div>
    )
}

export default About;