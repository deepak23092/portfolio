import React from 'react'

const Skills = () => {
    return (
        <section id='skills' className='mt-32 flex flex-col justify-center items-center text-white md:scroll-mt-28 scroll-mt-20'>
            <div className='text-center font-poppins mb-4'>
                <h1 className='md:text-4xl font-medium'>Skills</h1>
                <p className='text-slate-300 md:text-lg text-sm -mt-2'>My technical level</p>
            </div>

            <div className='md:flex gap-12'>

                <div className='bg-indigo-900 font-poppins flex flex-col items-center md:h-[19rem] h-64 md:w-[22.4rem] w-80 pt-4 rounded-3xl mb-6 md:mb-0'>
                    <h6 className='mb-4 md:mt-5'>Frontend Developer</h6>
                    <div className='grid grid-cols-2 gap-6 md:gap-x-12 gap-x-10'>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>HTML</span>
                                <span className='text-[10px] text-slate-300'>Basic</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>CSS</span>
                                <span className='text-[10px] text-slate-300'>Intermediate</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>Bootstrap</span>
                                <span className='text-[10px] text-slate-300'>Intermediate</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>Javascript</span>
                                <span className='text-[10px] text-slate-300'>Intermediate</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>Git</span>
                                <span className='text-[10px] text-slate-300'>Basic</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>React</span>
                                <span className='text-[10px] text-slate-300'>Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-indigo-900 font-poppins flex flex-col items-center md:h-[19rem] h-64 md:w-[22.4rem] w-80 pt-4 rounded-3xl mb-6 md:mb-0'>
                    <h6 className='mb-4 md:mt-5'>Backend Developer</h6>
                    <div className='grid grid-cols-2 gap-6 md:gap-x-12 gap-x-10'>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>Node JS</span>
                                <span className='text-[10px] text-slate-300'>Intermediate</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>Express JS</span>
                                <span className='text-[10px] text-slate-300'>Intermediate</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>Mongo DB</span>
                                <span className='text-[10px] text-slate-300'>Intermediate</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>My SQL</span>
                                <span className='text-[10px] text-slate-300'>Intermediate</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>SQL</span>
                                <span className='text-[10px] text-slate-300'>Basic</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-circle-check text-xs mt-1"></i>
                            <div className='flex flex-col ml-3'>
                                <span>Firebase</span>
                                <span className='text-[10px] text-slate-300'>Basic</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
