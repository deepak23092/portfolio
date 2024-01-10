import React from 'react';
import '../App.css';

const Contact = () => {
    return (
        <section id='contact' className='mt-32 flex flex-col justify-center items-center text-white md:scroll-mt-14 scroll-mt-24'>
            <div className='text-center font-poppins mb-8'>
                <h1 className='md:text-4xl font-medium'>Contact Me</h1>
                <p className='text-slate-300 md:text-lg text-sm -mt-2'>Get in touch</p>
            </div>

            <div className='flex flex-col md:flex-row gap-8 md:ml-14'>

                <div className='flex flex-col items-center gap-6'>
                    <h5>Talk to me</h5>

                    <div className='bg-indigo-900 md:w-64 w-5/6 h-32 flex flex-col justify-center items-center rounded-lg p-4'>
                        <i className="fa-solid fa-envelope text-lg"></i>
                        <span className='text-base'>Email</span>
                        <span className='text-xs text-slate-300'>deepaklohar974@gmail.com</span>
                        <a href='mailto:deepaklohar974@gmail.com' className='text-slate-300 md:text-sm text-xs mt-3 no-underline hover-move-right hover:text-slate-100' target='_blank'>Write me <i className="fa-solid fa-arrow-right text-xs ml-1"></i></a>
                    </div>

                    <div className='bg-indigo-900 md:w-64 w-5/6 h-32 flex flex-col justify-center items-center rounded-lg p-4'>
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                        <span className='text-base'>Whatsapp</span>
                        <span className='text-xs text-slate-300'>+91 8529347656</span>
                        <a href='https://wa.me/918529347656' className='text-slate-300 md:text-sm text-xs mt-3 no-underline hover-move-right hover:text-slate-100' target='_blank'>Write me <i className="fa-solid fa-arrow-right text-xs ml-1"></i></a>
                    </div>

                    <div className='bg-indigo-900 md:w-64 w-5/6 h-32 flex flex-col justify-center items-center rounded-lg p-4'>
                        <i className="fa-brands fa-instagram text-lg"></i>
                        <span className='text-base'>Instagram</span>
                        <span className='text-xs text-slate-300'>@_deepak23_</span>
                        <a href='https://www.instagram.com/_deepak23_' className='text-slate-300 md:text-sm text-xs mt-3 no-underline hover-move-right hover:text-slate-100' target='_blank'>Write me <i className="fa-solid fa-arrow-right text-xs ml-1"></i></a>
                    </div>

                </div>

                <div className='flex flex-col gap-6 items-center md:mt-0 mt-6'>
                    <h5>Write me your project</h5>

                    <form className='flex flex-col gap-4 md:w-3/4 w-5/6'
                        action='mailto:deepaklohar974@gmail.com'
                        method='post'
                        encType='text/plain'
                    >

                        <div className='relative mb-2'>
                            <label className='absolute top-[-0.80rem] left-5 text-sm p-1 bg-backcolor text-slate-300'>Name</label>
                            <input type="text" name='name' className='rounded-xl border-2 border-slate-400 bg-inherit outline-none text-slate-200 h-16 w-full p-4' placeholder='Insert your name' />
                        </div>

                        <div className='relative mb-2'>
                            <label className='absolute top-[-0.80rem] left-5 text-sm p-1 bg-backcolor text-slate-300'>Mail</label>
                            <input type="email" name='email' className='rounded-xl border-2 border-slate-400 bg-inherit outline-none text-slate-200 h-16 w-full p-4' placeholder='Insert your email' />
                        </div>

                        <div className='relative'>
                            <label className='absolute top-[-0.80rem] left-5 text-sm p-1 bg-backcolor text-slate-300'>Project</label>
                            <textarea name="project" cols="30" rows="10" className='rounded-xl border-2 border-slate-400 bg-inherit outline-none text-slate-200 h-40 w-full p-4 resize-none' placeholder='Write your project'></textarea>
                        </div>

                        <div>
                            <button className='bg-indigo-900 py-3 px-4 rounded-lg text-white font-medium hover:bg-indigo-800' type='submit'>
                                Send Message <i className="fa-regular fa-paper-plane ml-2"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact;
