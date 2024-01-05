import React from 'react';

const About = () => {
    return (
        <section className='h-screen md:-mt-10 -mt-16 flex flex-col justify-center items-center text-white'>
            <div className='text-center font-poppins'>
                <h1 className='md:text-4xl font-medium'>About Me</h1>
                <p className='text-slate-300 md:text-lg text-sm -mt-2'>My introduction</p>
            </div>

            <div className='flex md:mt-6 md:flex-row flex-col justify-center items-center'>
                <img className='md:h-80 md:w-80 h-60 w-60 rounded-lg' src="./images/deepak_2.jpg" alt="Deepak" />
                <div className='md:ml-28 md:flex flex-col text-center'>
                    <div className='flex gap-2 mb-4 justify-center md:justify-normal mt-6 md:mt-0'>
                        <div className='bg-indigo-900 md:w-32 md:h-24 w-24 h-20 flex flex-col justify-center items-center rounded-xl'>
                            <i className="fa-solid fa-medal md:text-lg text-sm"></i>
                            <span className='mt-1 md:text-base text-sm'>Experience</span>
                            <span className='md:text-xs text-[10px]'>1+ year</span>
                        </div>
                        <div className='bg-indigo-900 md:w-32 md:h-24 w-24 h-20 flex flex-col justify-center items-center rounded-xl'>
                            <i className="fa-solid fa-suitcase md:text-lg text-sm"></i>
                            <span className='mt-1 md:text-base text-sm'>Completed</span>
                            <span className='text-xs text-[10px]'>5+ Projects</span>
                        </div>
                        <div className='bg-indigo-900 md:w-32 md:h-24 w-24 h-20 flex flex-col justify-center items-center rounded-xl'>
                            <i className="fa-solid fa-headset md:text-lg text-sm"></i>
                            <span className='mt-1 md:text-base text-sm'>Support</span>
                            <span className='text-xs text-[10px]'>Online 24/7</span>
                        </div>
                    </div>
                    <p className='md:w-[26rem] w-80 md:mb-5 mb-4 md:text-base text-sm md:text-left'>
                        Devoted MERN stack enthusiast. Crafting elegant, user-focused web solutions. Skilled in frontend and backend technologies, weaving creativity and efficiency into every project.
                    </p>
                    <button className='bg-indigo-900 hover:bg-indigo-700 rounded-xl h-11 w-40'><a href='/files/Deepak resume.pdf' download='deepak resume.pdf' className='text-white no-underline'>Download CV <i class="fa-regular fa-file ml-1"></i></a></button>
                </div>
            </div>
        </section>
    );
};

export default About;
