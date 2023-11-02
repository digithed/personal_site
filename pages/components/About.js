import NavBar from "./NavBar";

function About() {
    return (
        <div style={{"height": "100vh"}} className="bg-zinc-800 z-1">
            <NavBar />

            <div className="pt-10 pb-20 mb-20">
                <div className='text-title container mx-auto'>
                    <div className="mb-10">
                    <h1 className="ml-5 pt-10 pb-5 font-serif text-zinc-100 text-4xl">About Me</h1>
                    <hr className="ml-5 pb-10"></hr>
                    <div className="mb-5 ml-10 text-zinc-100 font-mono text-lg">
                    <h2>"Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough."</h2>
                    <i>- Richard Feynman</i>
                    </div>
                    </div>
                    <div className="mt-10">
                    <div style={{"width": '450px','height': '200px' }} className="absolute ml-40 mt-5 z-20">
                        <img  className='rounded-xl' alt='me' src='me_2.jpg' />
                    </div>
                    <div style={{"width": "250px", "height": "250px", "marginRight": "400px"}} className="rounded-xl shadow-xl bg-white absolute right-0 bottom-0 mb-10 z-10"></div>
                    <div style={{"width": "250px", "height": "250px"}} className="rounded-xl shadow-xl bg-blue-300 absolute left-0 bottom-0 ml-10 z-5"></div>
                    <div style={{"width": "250px", "height": "250px"}} className="rounded-xl shadow-xl bg-orange-300 absolute left-0 bottom-0 mb-20 ml-20 z-5"></div>
                    <div style={{"width": "250px", "height": "250px", "marginTop": "280px"}} className="rounded-xl shadow-xl bg-green-300 absolute ml-40 top-0 z-2"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;