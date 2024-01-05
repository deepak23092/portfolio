import React from 'react';

const Home = () => {
    return (
        <section className="h-screen -mt-16 text-white flex flex-col-reverse md:flex-row items-center justify-center md:justify-normal md:px-4">
            {/* Left Section */}
            <div className="flex md:ml-32 mt-2 md:mt-0">
                <div className="flex md:flex-col gap-3">
                    <a href="https://www.instagram.com" target='_blank' className="text-4xl hover:text-blue-200"><i className="fab fa-instagram text-2xl"></i></a>
                    <a href="https://www.github.com/deepak23092" target='_blank' className="text-4xl hover:text-blue-200"><i className="fab fa-github text-2xl"></i></a>
                    <a href="https://www.facebook.com" target='_blank' className="text-4xl hover:text-blue-200"><i className="fab fa-facebook text-2xl"></i></a>
                </div>
            </div>

            {/* Middle Section */}
            <div className="md:ml-32 text-center mt-4 md:mt-0 md:flex flex-col">
                <h1 className="md:text-5xl text-3xl font-semibold md:text-left">Deepak Lohar</h1>
                <p className="md:text-2xl text-lg md:mt-2 md:text-left">Web Developer</p>
                <p className="md:text-lg text-sm -mt-2 md:mt-0 md:w-[36rem] w-80 font-poppins md:text-left">I'm a full stack web developer from Udaipur, Rajasthan, and I'm very passionate and dedicated to my work.</p>
                <button className='bg-sky-700 hover:bg-sky-600 h-11 w-32 rounded-lg md:mt-8 mt-4 font-poppins' type='button'>Say hello <i className="fa-regular fa-paper-plane ml-2"></i></button>
            </div>

            {/* Right Section */}
            <div className="md:ml-32 md:pr-12 right-0">
                <img className="h-64 border-4 border-white" src="./images/deepak.jpg" alt="Deepak" />
            </div>
        </section>
    );
};

export default Home;
