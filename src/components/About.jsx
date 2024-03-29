import React from 'react';

const About = () => {
    return (
        <section id='about' className='flex flex-col justify-center items-center text-white md:scroll-mt-28 scroll-mt-24'>
            <div className='text-center font-poppins'>
                <h1 className='md:text-4xl font-medium'>About Me</h1>
                <p className='text-slate-300 md:text-lg text-sm -mt-2'>My introduction</p>
            </div>

            <div className='flex md:mt-6 md:flex-row flex-col justify-center items-center'>
                <img className='lg:h-80 md:h-72 lg:w-80 md:w-72 h-60 w-60 rounded-lg lg:ml-0 md:ml-10' src="./images/deepak_2.jpg" alt="Deepak" />
                <div className='lg:ml-28 md:ml-10 md:flex flex-col text-center'>
                    <div className='flex gap-2 mb-4 justify-center md:justify-normal mt-6 md:mt-0'>
                        <div className='bg-indigo-900 lg:w-32 md:w-28 lg:h-24 md:h-24 w-24 h-20 flex flex-col justify-center items-center rounded-xl'>
                            <i className="fa-solid fa-medal lg:text-lg md:lext-base text-sm"></i>
                            <span className='mt-1 md:text-base text-sm'>Experience</span>
                            <span className='md:text-xs text-[10px] text-slate-300'>1+ year</span>
                        </div>
                        <div className='bg-indigo-900 lg:w-32 md:w-28 lg:h-24 md:h-24 w-24 h-20 flex flex-col justify-center items-center rounded-xl'>
                            <i className="fa-solid fa-medal lg:text-lg md:lext-base text-sm"></i>
                            <span className='mt-1 md:text-base text-sm'>Completed</span>
                            <span className='md:text-xs text-[10px] text-slate-300'>5+ Projects</span>
                        </div>
                        <div className='bg-indigo-900 lg:w-32 md:w-28 lg:h-24 md:h-24 w-24 h-20 flex flex-col justify-center items-center rounded-xl'>
                            <i className="fa-solid fa-medal lg:text-lg md:lext-base text-sm"></i>
                            <span className='mt-1 md:text-base text-sm'>Support</span>
                            <span className='md:text-xs text-[10px] text-slate-300'>Online 24/7</span>
                        </div>
                    </div>
                    <p className='md:w-[26rem] w-80 md:mb-5 mb-4 lg:text-base text-sm md:text-left'>
                        Devoted MERN stack enthusiast. Crafting elegant, user-focused web solutions. Skilled in frontend and backend technologies, weaving creativity and efficiency into every project.
                    </p>
                    <button className='bg-indigo-900 hover:bg-indigo-700 rounded-xl h-11 w-40'><a href='/files/Deepak resume.pdf' download='deepak resume.pdf' className='text-white no-underline'>Download CV <i className="fa-regular fa-file ml-1"></i></a></button>
                </div>
            </div>
        </section>
    );
};

export default About;
