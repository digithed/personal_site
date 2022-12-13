import NavBar from "./NavBar";

function About() {
    return (
        <div>
            <NavBar />

            <div className="pt-10 pb-20 bg-zinc-800">
                <div className='text-title container mx-auto'>
                    <h1 className="ml-5 pt-10 pb-5 font-serif text-zinc-100 text-4xl">About Me</h1>
                    <hr className="ml-5 pb-10"></hr>
                    <div className="mb-5 ml-10 text-zinc-100 font-mono text-lg">
                    <h2>"Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough."</h2>
                    <i>- Richard Feynman</i>
                    </div>
                    <div className="p-5 flex justify-center">
                        <div>
                            <img style={{ 'height': '500px' }} className='rounded-xl' alt='me' src='me_2.jpg' />
                        </div>
                   
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;