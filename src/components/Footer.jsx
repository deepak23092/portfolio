import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-32 flex flex-col justify-center items-center text-white'>

            <div className="footer__line w-full h-[2px] bg-slate-600"></div>

            <h1 className='md:text-3xl font-medium mt-10'>Deepak Lohar</h1>

            <nav className='flex list-none gap-4 mt-3'>
                <a className='no-underline text-slate-300 hover:text-slate-200' href="#about"><li className='no-underline'>About</li></a>
                <a className='no-underline text-slate-300 hover:text-slate-200' href="#projects"><li>Projects</li></a>
                <a className='no-underline text-slate-300 hover:text-slate-200' href="#services"><li>Services</li></a>
            </nav>

            <div className='flex mt-3 text-3xl gap-4'>
                <a href="https://www.facebook.com/profile.php?id=100044460483110" target='_blank' className='text-slate-200 hover:text-white'><i class="fa-brands fa-square-facebook"></i></a>
                <a href="https://www.instagram.com/_deepak23_" target='_blank' className='text-slate-200 hover:text-white'><i class="fa-brands fa-square-instagram"></i></a>
                <a href="https://twitter.com/_deepak23_" target='_blank' className='text-slate-200 hover:text-white'><i class="fa-brands fa-square-x-twitter"></i></a>
            </div>

            <span className='mt-10 mb-16 text-sm'>
                &copy; Deepak. All rights reserved
            </span>

        </footer>
    )
}

export default Footer
