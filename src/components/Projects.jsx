import React from 'react'

const Projects = () => {
    return (
        <section id='projects' className='mt-32 flex flex-col justify-center items-center text-white md:scroll-mt-16 scroll-mt-16'>
            <div className='text-center font-poppins mb-3'>
                <h1 className='md:text-4xl font-medium'>Projects</h1>
                <p className='text-slate-300 md:text-lg text-sm -mt-2'>My recent work</p>
            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                    <div className='bg-indigo-900 font-poppins flex flex-col md:h-[18rem] h-[16.7rem] md:w-[22.4rem] w-80 p-4 rounded-2xl'>
                        <img src="../images/newsMonkey.png" alt="project 1" className='rounded-2xl h-48' />
                        <span className='mt-4'>News Monkey</span>
                        <a className='text-slate-300 md:text-sm text-xs mt-1 no-underline hover-move-right hover:text-slate-200'>Demo <i className="fa-solid fa-arrow-right text-xs ml-1"></i></a>
                    </div>

                    <div className='bg-indigo-900 font-poppins flex flex-col md:h-[18rem] h-[16.7rem] md:w-[22.4rem] w-80 p-4 rounded-2xl'>
                        <img src="../images/breeze.png" alt="project 1" className='rounded-2xl h-48' />
                        <span className='mt-4'>Breeze - A Weather App</span>
                        <a href='https://breeze-e07f4.web.app/' target='_blank' className='text-slate-300 md:text-sm text-xs mt-1 no-underline hover-move-right hover:text-slate-200'>Demo <i className="fa-solid fa-arrow-right text-xs ml-1"></i></a>
                    </div>

                    <div className='bg-indigo-900 font-poppins flex flex-col md:h-[18rem] h-[16.7rem] md:w-[22.4rem] w-80 p-4 rounded-2xl'>
                        <img src="../images/assetManagement.png" alt="project 1" className='rounded-2xl h-48' />
                        <span className='mt-4'>Asset Management</span>
                        <a target='_blank' className='text-slate-300 md:text-sm text-xs mt-1 no-underline hover-move-right hover:text-slate-200'>Demo <i className="fa-solid fa-arrow-right text-xs ml-1"></i></a>
                    </div>

                    <div className='bg-indigo-900 font-poppins flex flex-col md:h-[18rem] h-[16.7rem] md:w-[22.4rem] w-80 p-4 rounded-2xl'>
                        <img src="../images/cozy_shoe_shop.png" alt="project 1" className='rounded-2xl h-48' />
                        <span className='mt-4'>Cozy Shoe Shop</span>
                        <a target='_blank' className='text-slate-300 md:text-sm text-xs mt-1 no-underline hover-move-right hover:text-slate-200'>Demo <i className="fa-solid fa-arrow-right text-xs ml-1"></i></a>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Projects
