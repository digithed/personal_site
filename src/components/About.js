import SideBar from "./SideBar";

function About() {
    return (
        <div className='h-screen bg-gradient-to-r from-rose-200 to-orange-300'>
            <SideBar />
            <div className='text-title pl-40 container mx-auto'>
                <h1 className="pt-10 font-serif text-white text-4xl">About Me</h1>
                <hr></hr>
                <p className="text-white pt-10">
                    I started my career in molecular biology as a laboratory technician at the Whitehead Institute for Biomedical Research,
                    a subsidiary of MIT. I worked within the lab of Rudolf Jaenisch where I was a core part of a CRISPR/Cas9 facility that offered services to the instititue.
                    I developed an interest in coding which started as an after-work hobby and began
                    building small tools to help with my day-to-day job such as Python scripts for automating laborious scheduling tasks.
                </p>
                <div style={{'float': 'right'}} className="pl-5 pt-5">
                <img style={{'width': '300px', 'height': '350px'}} className='rounded-full shadow-xl shadow-white' alt='charlie and I' src='me_2.jpg' />
                </div>
                <p style={{'textAlign': 'justify'}} className="text-white">
                    <br></br>
                    Over time I began building my own web applications in Javascript frameworks such as React and getting more familiar with full-stack development
                    using Python as a backend language. Deciding to follow my newfound passion, I completed Computer Science courses at Northeastern University in order to get some 
                    grounding in a traditional knowledge base. It was at Northeastern that I was introduced to the subfields of Machine Learning, Computer Systems, and Programming Languages,
                    topics that I am currently still interested in exploring.
                </p>
                <p className="text-white">
                    <br></br>
                    My ambition is to create computational tools and resources for life scientsts that will not be dime a dozen creations,
                    but will be unique, imaginative, and help fuel the next wave of life science research insight.
                    My hope is that over time, by combining Computer Science concepts with my background in the life sciences,
                    I'll be able to grow positively as a software engineer, scientist, and entrepenuer.
                </p>
            </div>
        </div>
    )
}

export default About;