import React from 'react';

const Home = () => {
    return (
        <section id='home' className="h-screen md:-mt-10 -mt-16 text-white flex flex-col-reverse md:flex-row items-center justify-center md:justify-normal md:px-4 relative">
            {/* Left Section */}
            <div className="flex xl:ml-32 lg:ml-16 md:ml-10 mt-2 md:mt-0">
                <div className="flex md:flex-col gap-3">
                    <a href="https://www.instagram.com/_deepak23_" target='_blank' className="text-4xl hover:text-blue-200"><i className="fab fa-instagram text-2xl"></i></a>
                    <a href="https://www.github.com/deepak23092" target='_blank' className="text-4xl hover:text-blue-200"><i className="fab fa-github text-2xl"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100044460483110" target='_blank' className="text-4xl hover:text-blue-200"><i className="fab fa-facebook text-2xl"></i></a>
                </div>
            </div>

            {/* Middle Section */}
            <div className="xl:ml-32 lg:ml-16 md:ml-10 text-center mt-4 md:mt-0 md:flex flex-col">
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold md:text-left font-serif">Deepak Lohar</h1>
                <p className="lg:text-2xl md:text-xl text-lg md:mt-2 md:text-left">Web Developer</p>
                <div className='w-2/3'>
                    <p className="lg:text-lg md:text-base text-sm -mt-2 md:mt-0 md:w-full w-72 font-poppins md:text-left">I'm a full stack web developer from Udaipur, Rajasthan, and I'm very passionate and dedicated to my work.</p>
                </div>
                <a href="https://m.me/100044460483110" target='_blank' className='flex md:justify-start justify-center no-underline'><button className='text-white bg-indigo-900 hover:bg-indigo-700 h-11 w-32 rounded-lg md:mt-8 mt-4 font-poppins' type='button'>Say hello <i className="fa-regular fa-paper-plane ml-2"></i></button></a>
            </div>

            {/* Right Section */}
            <div className="md:absolute text-center xl:right-40 lg:right-12 md:right-8">
                <img className="md:w-full h-64 border-4 border-white" src="./images/deepak_3.jpg" alt="Deepak" />
            </div>
        </section>
    );
};

export default Home;
